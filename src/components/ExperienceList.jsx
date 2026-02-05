import { ChevronRight, Plus } from 'lucide-react';
import { colorMap } from '../data/initialData';

export function ExperienceList({
  userData,
  selectedStage,
  onSelectStage,
  onAddStage
}) {
  if (!userData) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center text-gray-500 text-sm">
        ← Select a user or system
      </div>
    );
  }

  const colors = colorMap[userData.color];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-gray-700">
          {userData.name}
        </h2>
        <button
          onClick={onAddStage}
          className="px-2 py-1 text-xs bg-gray-900 text-white rounded hover:bg-gray-800 flex items-center gap-1"
        >
          <Plus size={14} /> Add
        </button>
      </div>
      <div className="space-y-2">
        {userData.stages.map((stage, idx) => {
          const isSelected = selectedStage?.id === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => onSelectStage(stage)}
              className={`w-full text-left px-3 py-2.5 rounded-lg border transition-all text-sm ${
                isSelected ? `${colors.bg} ${colors.border}` : `border-gray-200 ${colors.hover}`
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-xs text-gray-500">Experience {idx + 1}</div>
                  <div className="font-medium mt-0.5">{stage.name}</div>
                  <div className="text-xs text-gray-600 mt-1 italic">{stage.userIntent}</div>
                </div>
                {isSelected && <ChevronRight size={16} className="text-gray-400 mt-1" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
