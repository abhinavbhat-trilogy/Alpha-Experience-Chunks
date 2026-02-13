import { X, Clock, RotateCcw, Loader2 } from 'lucide-react';

function formatTimestamp(isoString) {
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export function VersionHistory({ isOpen, onClose, versions, onRestore, loadingHistory, currentVersionId }) {
  if (!isOpen) return null;

  const handleRestore = (version) => {
    if (window.confirm(`Restore to version from ${formatTimestamp(version.timestamp)}? Current changes will be overwritten.`)) {
      onRestore(version.snapshot, version);
      onClose();
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} />

      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 flex flex-col">
        <div className="px-4 py-3 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <h2 className="font-semibold text-sm">Version History</h2>
              <span className="text-xs text-gray-500">({versions.length})</span>
            </div>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
              <X size={16} />
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-1">Versions are saved automatically after a few seconds of inactivity</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {loadingHistory ? (
            <div className="flex items-center justify-center py-8 text-gray-500">
              <Loader2 className="animate-spin mr-2" size={16} />
              <span className="text-sm">Loading history...</span>
            </div>
          ) : versions.length === 0 ? (
            <div className="text-center py-8 text-gray-500 text-sm">
              No versions yet. Versions are saved automatically after a few seconds of inactivity.
            </div>
          ) : (
            versions.map((version, index) => (
              <div key={version.id} className="border rounded-lg p-3 hover:border-gray-300 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-500">
                        {formatTimestamp(version.timestamp)}
                      </span>
                      {version.id === currentVersionId && (
                        <span className="text-xs px-1.5 py-0.5 rounded bg-green-100 text-green-700">Current</span>
                      )}
                    </div>
                    <div className="text-sm text-gray-700 mt-1 line-clamp-2">
                      {version.summary}
                    </div>
                  </div>
                  {version.id !== currentVersionId && version.snapshot && (
                    <button
                      onClick={() => handleRestore(version)}
                      className="ml-2 px-2 py-1 text-xs bg-gray-900 text-white rounded hover:bg-gray-800 flex items-center gap-1 shrink-0"
                    >
                      <RotateCcw size={12} /> Restore
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
