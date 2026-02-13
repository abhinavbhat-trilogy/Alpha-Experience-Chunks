import { useState } from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { BUCKETS, LEVELS, SYSTEMS, AUTOMATION_LEVELS } from '../data/initialData';

const bucketColors = {
  Marketing: 'bg-pink-100 text-pink-700',
  Admissions: 'bg-violet-100 text-violet-700',
  'Re-enrollment': 'bg-indigo-100 text-indigo-700',
  Roster: 'bg-teal-100 text-teal-700',
  Academics: 'bg-sky-100 text-sky-700',
  'After School': 'bg-rose-100 text-rose-700',
};

const levelColors = {
  'Today': { bg: 'bg-gray-50', border: 'border-gray-200', accent: 'border-l-gray-400', label: 'text-gray-700' },
  '26/27': { bg: 'bg-amber-50', border: 'border-amber-200', accent: 'border-l-amber-400', label: 'text-amber-700' },
  'End State': { bg: 'bg-blue-50', border: 'border-blue-200', accent: 'border-l-blue-400', label: 'text-blue-700' },
};

const systemColors = {
  'HubSpot': 'border-orange-300 text-orange-600',
  'Legacy SIS': 'border-red-300 text-red-600',
  'FinalSite': 'border-cyan-300 text-cyan-600',
  'Unified Student Platform': 'border-emerald-300 text-emerald-600',
  'AfterSchool HQ': 'border-rose-300 text-rose-600',
};

export function ExperienceDetail({
  stage,
  onUpdateStage,
  onDeleteStage
}) {
  const [editMode, setEditMode] = useState(false);

  if (!stage) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center text-gray-500 text-sm">
        ← Select an experience to view details
      </div>
    );
  }

  const evolution = stage.evolution || {};

  const toggleSystem = (level, system) => {
    const levelData = evolution[level] || { description: '-', systems: [] };
    const systems = levelData.systems || [];
    const updatedSystems = systems.includes(system)
      ? systems.filter(s => s !== system)
      : [...systems, system];

    onUpdateStage('evolution', {
      ...evolution,
      [level]: { ...levelData, systems: updatedSystems }
    });
  };

  const updateDescription = (level, description) => {
    const levelData = evolution[level] || { description: '-', systems: [] };
    onUpdateStage('evolution', {
      ...evolution,
      [level]: { ...levelData, description }
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-700">Experience Details</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (window.confirm(`Delete "${stage.name}"? This cannot be undone.`)) {
                onDeleteStage();
                setEditMode(false);
              }
            }}
            className="px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700 flex items-center gap-1"
          >
            <Trash2 size={12} /> Delete
          </button>
          <button
            onClick={() => setEditMode(!editMode)}
            className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-1"
          >
            <Edit2 size={12} /> {editMode ? 'Done' : 'Edit'}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-3">
          <div className="col-span-2">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Experience Name</label>
            {editMode ? (
              <input
                type="text"
                value={stage.name}
                onChange={(e) => onUpdateStage('name', e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <div className="text-lg font-semibold">{stage.name}</div>
            )}
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Phase</label>
            {editMode ? (
              <select
                value={stage.phase || ''}
                onChange={(e) => onUpdateStage('phase', e.target.value || null)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">No Phase</option>
                <option value="Pre-Application">Pre-Application</option>
                <option value="Post-Application">Post-Application</option>
              </select>
            ) : (
              <div className={`inline-block px-2 py-1 text-sm rounded ${
                stage.phase === 'Pre-Application'
                  ? 'bg-amber-100 text-amber-700'
                  : stage.phase === 'Post-Application'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-500'
              }`}>
                {stage.phase || 'No Phase'}
              </div>
            )}
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Bucket</label>
            {editMode ? (
              <select
                value={stage.bucket}
                onChange={(e) => onUpdateStage('bucket', e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {BUCKETS.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            ) : (
              <div className={`inline-block px-2 py-1 text-sm rounded ${bucketColors[stage.bucket] || 'bg-gray-100 text-gray-500'}`}>
                {stage.bucket}
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">User Intent</label>
          {editMode ? (
            <input
              type="text"
              value={stage.userIntent}
              onChange={(e) => onUpdateStage('userIntent', e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="I want to..."
            />
          ) : (
            <div className="text-sm text-gray-700 bg-purple-50 p-3 rounded-lg italic">"{stage.userIntent}"</div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Entry Point</label>
            {editMode ? (
              <textarea
                value={stage.entryPoint || ''}
                onChange={(e) => onUpdateStage('entryPoint', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="What triggers this experience..."
              />
            ) : (
              <div className="text-sm text-gray-700 bg-green-50 border border-green-200 p-2.5 rounded-lg">
                {stage.entryPoint || <span className="text-gray-400 italic">Not defined</span>}
              </div>
            )}
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Exit Point</label>
            {editMode ? (
              <textarea
                value={stage.exitPoint || ''}
                onChange={(e) => onUpdateStage('exitPoint', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="What marks completion..."
              />
            ) : (
              <div className="text-sm text-gray-700 bg-red-50 border border-red-200 p-2.5 rounded-lg">
                {stage.exitPoint || <span className="text-gray-400 italic">Not defined</span>}
              </div>
            )}
          </div>
        </div>

        {LEVELS.map(level => {
          const levelData = evolution[level] || { description: '-', systems: [] };
          const colors = levelColors[level] || levelColors['Today'];
          const activeSystems = levelData.systems || [];

          return (
            <div key={level} className={`rounded-lg border ${colors.border} border-l-4 ${colors.accent} overflow-hidden`}>
              <div className={`px-3 py-2 ${colors.bg}`}>
                <span className={`text-sm font-bold ${colors.label}`}>{level}</span>
              </div>
              <div className="p-3 space-y-2">
                {editMode ? (
                  <textarea
                    value={levelData.description}
                    onChange={(e) => updateDescription(level, e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <div className="text-sm text-gray-700">{levelData.description}</div>
                )}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {editMode ? (
                    <>
                      <span className="text-xs text-gray-400 italic">Systems:</span>
                      {SYSTEMS.map(system => {
                        const isActive = activeSystems.includes(system);
                        return (
                          <button
                            key={system}
                            onClick={() => toggleSystem(level, system)}
                            className={`text-xs px-1.5 py-0.5 rounded border bg-white transition-all font-mono ${
                              isActive
                                ? systemColors[system]
                                : 'text-gray-300 border-gray-200 opacity-50 hover:opacity-100'
                            }`}
                          >
                            {system}
                          </button>
                        );
                      })}
                    </>
                  ) : activeSystems.length > 0 ? (
                    <>
                      <span className="text-xs text-gray-400 italic">Systems:</span>
                      {activeSystems.map(system => (
                        <span
                          key={system}
                          className={`text-xs px-1.5 py-0.5 rounded border bg-white font-mono ${systemColors[system] || 'border-gray-300 text-gray-500'}`}
                        >
                          {system}
                        </span>
                      ))}
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}

        <div className="rounded-lg border border-violet-200 border-l-4 border-l-violet-400 overflow-hidden">
          <div className="px-3 py-2 bg-violet-50">
            <span className="text-sm font-bold text-violet-700">Automation Vision</span>
          </div>
          <div className="p-3 space-y-2">
            <div className="flex items-center gap-1.5 flex-wrap">
              {editMode ? (
                AUTOMATION_LEVELS.map(level => {
                  const isActive = stage.automationTarget === level;
                  return (
                    <button
                      key={level}
                      onClick={() => onUpdateStage('automationTarget', isActive ? null : level)}
                      className={`text-xs px-2 py-1 rounded border transition-all ${
                        isActive
                          ? 'bg-violet-100 text-violet-700 border-violet-300'
                          : 'bg-white text-gray-400 border-gray-200 opacity-50 hover:opacity-100'
                      }`}
                    >
                      {level}
                    </button>
                  );
                })
              ) : stage.automationTarget ? (
                <span className="text-xs px-2 py-1 rounded border bg-violet-100 text-violet-700 border-violet-300">
                  {stage.automationTarget}
                </span>
              ) : (
                <span className="text-xs text-gray-400 italic">No automation level set</span>
              )}
            </div>
            {editMode ? (
              <textarea
                value={stage.automationNotes || ''}
                onChange={(e) => onUpdateStage('automationNotes', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Reasoning — what's the automation play for this experience?"
              />
            ) : stage.automationNotes ? (
              <div className="text-sm text-gray-700">{stage.automationNotes}</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
