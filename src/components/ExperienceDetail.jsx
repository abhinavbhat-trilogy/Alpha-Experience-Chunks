import { useState } from 'react';
import { Edit2, Trash2 } from 'lucide-react';

export function ExperienceDetail({
  stage,
  onUpdateStage,
  onUpdateOwner,
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

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-700">Experience Details</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setEditMode(!editMode)}
            className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-1"
          >
            <Edit2 size={12} /> {editMode ? 'Done' : 'Edit'}
          </button>
          <button
            onClick={onDeleteStage}
            className="px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700 flex items-center gap-1"
          >
            <Trash2 size={12} /> Delete
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
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

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Current State (Maintenance)</label>
          {editMode ? (
            <textarea
              value={stage.currentState}
              onChange={(e) => onUpdateStage('currentState', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">{stage.currentState}</div>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">Future State</label>
          {editMode ? (
            <textarea
              value={stage.futureState}
              onChange={(e) => onUpdateStage('futureState', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <div className="text-sm text-gray-700 bg-blue-50 p-3 rounded-lg">{stage.futureState}</div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Product Owner</label>
            {editMode ? (
              <input
                type="text"
                value={stage.owner.product}
                onChange={(e) => onUpdateOwner('product', e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <div className="px-3 py-2 text-sm bg-gray-100 rounded-lg">{stage.owner.product}</div>
            )}
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Tech Lead</label>
            {editMode ? (
              <input
                type="text"
                value={stage.owner.tech}
                onChange={(e) => onUpdateOwner('tech', e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <div className="px-3 py-2 text-sm bg-gray-100 rounded-lg">{stage.owner.tech}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
