import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { BUCKETS, LEVELS, colorMap } from '../data/initialData';

const bucketStyles = {
  Marketing: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-800', badge: 'bg-pink-100 text-pink-700' },
  Admissions: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-800', badge: 'bg-violet-100 text-violet-700' },
  'Re-enrollment': { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-800', badge: 'bg-indigo-100 text-indigo-700' },
  Roster: { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-800', badge: 'bg-teal-100 text-teal-700' },
  Academics: { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-800', badge: 'bg-sky-100 text-sky-700' },
  'After School': { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-800', badge: 'bg-rose-100 text-rose-700' },
};

const levelColors = {
  'Today': { text: 'text-gray-600', dot: 'bg-gray-400' },
  '26/27': { text: 'text-amber-700', dot: 'bg-amber-400' },
  'End State': { text: 'text-blue-700', dot: 'bg-blue-400' },
};

const systemColors = {
  'HubSpot': 'bg-orange-100 text-orange-700 border-orange-200',
  'Legacy SIS': 'bg-red-100 text-red-700 border-red-200',
  'FinalSite': 'bg-cyan-100 text-cyan-700 border-cyan-200',
  'Unified Student Platform': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'AfterSchool HQ': 'bg-rose-100 text-rose-700 border-rose-200',
};

function groupByBucket(data) {
  const grouped = {};
  for (const bucket of BUCKETS) {
    grouped[bucket] = [];
  }

  for (const [userId, userData] of Object.entries(data)) {
    for (const stage of userData.stages) {
      const bucket = stage.bucket || BUCKETS[0];
      if (!grouped[bucket]) {
        grouped[bucket] = [];
      }
      grouped[bucket].push({
        userId,
        userName: userData.name,
        userColor: userData.color,
        userType: userData.type,
        stage,
      });
    }
  }

  // Within each bucket, group by user
  const result = {};
  for (const [bucket, entries] of Object.entries(grouped)) {
    const byUser = {};
    for (const entry of entries) {
      if (!byUser[entry.userId]) {
        byUser[entry.userId] = {
          userName: entry.userName,
          userColor: entry.userColor,
          userType: entry.userType,
          stages: [],
        };
      }
      byUser[entry.userId].stages.push(entry.stage);
    }
    result[bucket] = byUser;
  }

  return result;
}

function collectSystemsByLevel(usersByUser) {
  const systemsByLevel = {};
  for (const level of LEVELS) {
    systemsByLevel[level] = new Set();
  }

  for (const userData of Object.values(usersByUser)) {
    for (const stage of userData.stages) {
      if (!stage.evolution) continue;
      for (const level of LEVELS) {
        const levelData = stage.evolution[level];
        if (levelData?.systems) {
          for (const system of levelData.systems) {
            systemsByLevel[level].add(system);
          }
        }
      }
    }
  }

  return systemsByLevel;
}

function UserAccordion({ userId, userData }) {
  const [expanded, setExpanded] = useState(false);
  const colors = colorMap[userData.userColor];

  return (
    <div className="ml-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full text-left px-3 py-2 rounded-lg border transition-all text-sm flex items-center gap-2 ${
          expanded
            ? `${colors.bg} ${colors.border} ${colors.text}`
            : `border-gray-200 hover:border-gray-300 text-gray-700`
        }`}
      >
        {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        <span className="font-medium">{userData.userName}</span>
        <span className="text-xs text-gray-500">
          {userData.stages.length} {userData.stages.length === 1 ? 'experience' : 'experiences'}
        </span>
      </button>

      {expanded && (
        <div className="mt-1 ml-6 space-y-1">
          {userData.stages.map(stage => (
            <div
              key={stage.id}
              className="px-3 py-2 rounded-lg border border-gray-100 bg-white text-sm"
            >
              <div className="font-medium text-gray-900">{stage.name}</div>
              <div className="text-xs text-gray-600 mt-0.5 italic">"{stage.userIntent}"</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function BucketAccordion({ bucket, usersByUser }) {
  const [expanded, setExpanded] = useState(true);
  const [evolutionExpanded, setEvolutionExpanded] = useState(false);
  const style = bucketStyles[bucket];
  const userIds = Object.keys(usersByUser);
  const totalStages = userIds.reduce((sum, uid) => sum + usersByUser[uid].stages.length, 0);
  const systemsByLevel = collectSystemsByLevel(usersByUser);

  if (totalStages === 0) return null;

  return (
    <div className={`rounded-lg border ${style.border} overflow-hidden`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full text-left px-4 py-3 flex items-center gap-2 ${style.bg} ${style.text} font-semibold text-sm`}
      >
        {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        <span>{bucket}</span>
        <span className={`text-xs font-normal px-2 py-0.5 rounded-full ${style.badge}`}>
          {totalStages} {totalStages === 1 ? 'experience' : 'experiences'}
        </span>
      </button>

      {expanded && (
        <div className="bg-white">
          <div className="border-b border-gray-100">
            <button
              onClick={() => setEvolutionExpanded(!evolutionExpanded)}
              className="w-full text-left px-4 py-2 flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors"
            >
              {evolutionExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
              Systems Evolution
            </button>
            {evolutionExpanded && (
              <div className="px-4 pb-3 space-y-1.5">
                {LEVELS.map(level => {
                  const systems = [...systemsByLevel[level]];
                  const lc = levelColors[level] || levelColors['Today'];
                  return (
                    <div key={level} className="flex items-center gap-2 h-6">
                      <div className="flex items-center gap-1.5 w-20 shrink-0">
                        <span className={`w-2 h-2 rounded-full ${lc.dot} shrink-0`} />
                        <span className={`text-xs font-bold ${lc.text}`}>{level}</span>
                      </div>
                      {systems.length > 0 ? (
                        <div className="flex gap-1 flex-wrap items-center">
                          {systems.map(system => (
                            <span
                              key={system}
                              className={`text-xs px-1.5 py-0.5 rounded border ${systemColors[system] || 'bg-gray-100 text-gray-600 border-gray-200'}`}
                            >
                              {system}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-xs text-gray-400">—</span>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="p-3 space-y-2">
            {userIds.map(userId => (
              <UserAccordion
                key={userId}
                userId={userId}
                userData={usersByUser[userId]}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function BucketView({ data }) {
  const grouped = groupByBucket(data);

  return (
    <div className="space-y-4">
      {BUCKETS.map(bucket => (
        <BucketAccordion
          key={bucket}
          bucket={bucket}
          usersByUser={grouped[bucket]}
        />
      ))}
    </div>
  );
}
