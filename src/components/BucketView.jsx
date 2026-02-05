import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { BUCKETS, colorMap } from '../data/initialData';

const bucketStyles = {
  Marketing: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-800', badge: 'bg-pink-100 text-pink-700' },
  Admissions: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-800', badge: 'bg-violet-100 text-violet-700' },
  Roster: { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-800', badge: 'bg-teal-100 text-teal-700' },
  Academics: { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-800', badge: 'bg-sky-100 text-sky-700' },
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
  const style = bucketStyles[bucket];
  const userIds = Object.keys(usersByUser);
  const totalStages = userIds.reduce((sum, uid) => sum + usersByUser[uid].stages.length, 0);

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
        <div className="bg-white p-3 space-y-2">
          {userIds.map(userId => (
            <UserAccordion
              key={userId}
              userId={userId}
              userData={usersByUser[userId]}
            />
          ))}
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
