import { useState, useMemo } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { ExperienceDetail } from './ExperienceDetail';
import { colorMap, USER_ORDER } from '../data/initialData';

const bucketColors = {
  Marketing: 'bg-pink-100 text-pink-700',
  Admissions: 'bg-violet-100 text-violet-700',
  'Re-enrollment': 'bg-indigo-100 text-indigo-700',
  Roster: 'bg-teal-100 text-teal-700',
  Academics: 'bg-sky-100 text-sky-700',
  'After School': 'bg-rose-100 text-rose-700',
};

// Group consecutive stages by bucket to form flow sections
function groupBySection(stages) {
  const groups = [];
  let current = null;

  stages.forEach((stage, idx) => {
    const key = stage.bucket;
    if (!current || current.key !== key) {
      current = { key, label: key, stages: [] };
      groups.push(current);
    }
    current.stages.push({ ...stage, globalIdx: idx });
  });

  return groups;
}

export function FlowView({ data, onUpdateStage, onDeleteStage }) {
  const [selectedActor, setSelectedActor] = useState(null);
  const [selectedStage, setSelectedStage] = useState(null);

  const actors = useMemo(() => {
    if (!data) return [];
    const entries = Object.entries(data).map(([id, actor]) => ({ id, ...actor }));
    return entries.sort((a, b) => {
      const ai = USER_ORDER.indexOf(a.id);
      const bi = USER_ORDER.indexOf(b.id);
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    });
  }, [data]);

  // Auto-select first actor
  const actorId = selectedActor || actors[0]?.id;
  const actorData = actorId ? data[actorId] : null;
  const colors = actorData ? colorMap[actorData.color] : null;

  const sections = useMemo(() => {
    if (!actorData) return [];
    return groupBySection(actorData.stages);
  }, [actorData]);

  const handleSelectStage = (stage) => {
    setSelectedStage(prev => prev?.id === stage.id ? null : stage);
  };

  const handleUpdateStage = (field, value) => {
    if (!actorId || !selectedStage) return;
    onUpdateStage(actorId, selectedStage.id, field, value);
    setSelectedStage(prev => ({ ...prev, [field]: value }));
  };

  const handleDeleteStage = () => {
    if (!actorId || !selectedStage) return;
    onDeleteStage(actorId, selectedStage.id);
    setSelectedStage(null);
  };

  return (
    <div className="space-y-4">
      {/* Actor selector */}
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-gray-700">Actor</label>
        <select
          value={actorId || ''}
          onChange={(e) => {
            setSelectedActor(e.target.value);
            setSelectedStage(null);
          }}
          className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
        >
          {actors.map(actor => (
            <option key={actor.id} value={actor.id}>{actor.name}</option>
          ))}
        </select>
        {actorData && (
          <span className="text-xs text-gray-500">
            {actorData.stages.length} experiences
          </span>
        )}
      </div>

      <div className={`flex gap-4 ${selectedStage ? '' : ''}`}>
        {/* Flow diagram area */}
        <div className={`${selectedStage ? 'flex-1 min-w-0' : 'w-full'} transition-all`}>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            {sections.map((section, sectionIdx) => (
              <div key={`${section.key}-${sectionIdx}`} className="mb-6 last:mb-0">
                {/* Section header */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${bucketColors[section.key] || 'bg-gray-100 text-gray-600'}`}>
                    {section.label}
                  </span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Flow cards */}
                <div className="flex flex-wrap items-start gap-3">
                  {section.stages.map((stage, idx) => {
                    const isSelected = selectedStage?.id === stage.id;
                    return (
                      <div key={stage.id} className="flex items-start">
                        <button
                          onClick={() => handleSelectStage(stage)}
                          className={`text-left w-56 rounded-lg border-2 transition-all p-3 ${
                            isSelected
                              ? `${colors?.bg || 'bg-blue-50'} ${colors?.border || 'border-blue-300'} ring-2 ring-blue-300 ring-offset-1`
                              : 'border-gray-200 hover:border-gray-300 hover:shadow-sm bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 flex-wrap mb-1">
                            <span className="text-xs text-gray-400">#{stage.globalIdx + 1}</span>
                            {stage.phase && (
                              <span className={`text-xs px-1 py-0.5 rounded leading-none ${
                                stage.phase === 'Pre-Application'
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-green-100 text-green-700'
                              }`}>
                                {stage.phase}
                              </span>
                            )}
                          </div>
                          <div className="font-medium text-sm text-gray-900 leading-snug">{stage.name}</div>
                          <div className="text-xs text-gray-500 mt-1 italic line-clamp-2">{stage.userIntent}</div>
                        </button>
                        {/* Arrow connector */}
                        {idx < section.stages.length - 1 && (
                          <div className="flex items-center self-center px-1 text-gray-300">
                            <ChevronRight size={16} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        {selectedStage && (
          <div className="w-[420px] flex-shrink-0">
            <div className="sticky top-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">Experience #{(actorData?.stages.findIndex(s => s.id === selectedStage.id) ?? -1) + 1}</span>
                <button
                  onClick={() => setSelectedStage(null)}
                  className="p-1 rounded hover:bg-gray-100 text-gray-400"
                >
                  <X size={14} />
                </button>
              </div>
              <ExperienceDetail
                stage={selectedStage}
                onUpdateStage={handleUpdateStage}
                onDeleteStage={handleDeleteStage}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
