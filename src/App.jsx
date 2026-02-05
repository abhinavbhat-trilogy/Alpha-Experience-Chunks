import { useState, useEffect, useCallback } from 'react';
import { Download, RotateCcw, Cloud, CloudOff, Loader2, Users, FolderKanban } from 'lucide-react';
import { UserList } from './components/UserList';
import { ExperienceList } from './components/ExperienceList';
import { ExperienceDetail } from './components/ExperienceDetail';
import { BucketView } from './components/BucketView';
import { initialData, BUCKETS } from './data/initialData';
import { fetchData, saveData, isConfigured } from './services/jsonbin';

const STORAGE_KEY = 'alpha-experience-chunks-data';

export default function App() {
  const [data, setData] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedStage, setSelectedStage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [lastSaved, setLastSaved] = useState(null);
  const [viewMode, setViewMode] = useState('users');

  const useCloud = isConfigured();

  // Load data on mount
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      setError(null);

      try {
        if (useCloud) {
          const cloudData = await fetchData();
          if (cloudData) {
            setData(cloudData);
          } else {
            setData(initialData);
          }
        } else {
          // Fallback to localStorage
          const stored = localStorage.getItem(STORAGE_KEY);
          setData(stored ? JSON.parse(stored) : initialData);
        }
      } catch (err) {
        setError('Failed to load data. Using local backup.');
        const stored = localStorage.getItem(STORAGE_KEY);
        setData(stored ? JSON.parse(stored) : initialData);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [useCloud]);

  // Save data when it changes (debounced)
  useEffect(() => {
    if (!data || loading) return;

    // Always save to localStorage as backup
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    if (!useCloud) {
      setLastSaved(new Date());
      return;
    }

    // Debounce cloud saves
    const timeoutId = setTimeout(async () => {
      setSaving(true);
      try {
        await saveData(data);
        setLastSaved(new Date());
        setError(null);
      } catch (err) {
        setError('Failed to save to cloud. Changes saved locally.');
      } finally {
        setSaving(false);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [data, useCloud, loading]);

  const handleSelectUser = (userId) => {
    setSelectedUser(userId);
    setSelectedStage(null);
  };

  const handleSelectStage = (stage) => {
    setSelectedStage(stage);
  };

  const updateStage = useCallback((field, value) => {
    if (!selectedUser || !selectedStage) return;

    setData(prev => ({
      ...prev,
      [selectedUser]: {
        ...prev[selectedUser],
        stages: prev[selectedUser].stages.map(stage =>
          stage.id === selectedStage.id
            ? { ...stage, [field]: value }
            : stage
        )
      }
    }));

    setSelectedStage(prev => ({ ...prev, [field]: value }));
  }, [selectedUser, selectedStage]);

  const addStage = () => {
    if (!selectedUser) return;

    const newId = `${selectedUser[0]}${Date.now()}`;
    const newStage = {
      id: newId,
      name: "New Experience",
      bucket: BUCKETS[0],
      userIntent: "I want to...",
      currentState: "Description of current state...",
      futureState: "Description of future state..."
    };

    setData(prev => ({
      ...prev,
      [selectedUser]: {
        ...prev[selectedUser],
        stages: [...prev[selectedUser].stages, newStage]
      }
    }));

    // Auto-select the new stage
    setSelectedStage(newStage);

    // Scroll to the new experience after a brief delay for render
    setTimeout(() => {
      const newElement = document.querySelector(`[data-stage-id="${newId}"]`);
      if (newElement) {
        newElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 100);
  };

  const resetToDefault = async () => {
    if (window.confirm("This will reset all data to the original state. Any changes will be lost. Continue?")) {
      setData(initialData);
      setSelectedUser(null);
      setSelectedStage(null);
    }
  };

  const exportData = () => {
    const users = Object.keys(data);
    const internalUsers = users.filter(userId => data[userId].type === 'internal');
    const externalSystems = users.filter(userId => data[userId].type === 'external');

    let md = '# Alpha Experience Chunks - Ownership Structure\n\n';
    md += 'Generated: ' + new Date().toLocaleString() + '\n\n';
    md += '---\n\n';

    // Internal Users
    md += '## Internal Users\n\n';
    internalUsers.forEach(userId => {
      const userData = data[userId];
      md += `### ${userData.name}\n\n`;
      userData.stages.forEach((stage, idx) => {
        md += `#### Experience ${idx + 1}: ${stage.name}\n\n`;
        if (stage.phase) {
          md += `**Phase**: ${stage.phase}\n\n`;
        }
        if (stage.bucket) {
          md += `**Bucket**: ${stage.bucket}\n\n`;
        }
        md += `**User Intent**: ${stage.userIntent}\n\n`;
        md += `**Today's Lived Experience**:\n${stage.currentState}\n\n`;
        md += `**The Future 0-Friction Experience**:\n${stage.futureState}\n\n`;
        md += '---\n\n';
      });
    });

    // External Systems
    md += '## External Systems & Integrations\n\n';
    externalSystems.forEach(userId => {
      const userData = data[userId];
      md += `### ${userData.name}\n\n`;
      userData.stages.forEach((stage, idx) => {
        md += `#### Experience ${idx + 1}: ${stage.name}\n\n`;
        if (stage.phase) {
          md += `**Phase**: ${stage.phase}\n\n`;
        }
        if (stage.bucket) {
          md += `**Bucket**: ${stage.bucket}\n\n`;
        }
        md += `**User Intent**: ${stage.userIntent}\n\n`;
        md += `**Today's Lived Experience**:\n${stage.currentState}\n\n`;
        md += `**The Future 0-Friction Experience**:\n${stage.futureState}\n\n`;
        md += '---\n\n';
      });
    });

    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'alpha-experience-chunks.md';
    a.click();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-2 text-gray-600">
          <Loader2 className="animate-spin" size={20} />
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Alpha Experience Chunks</h1>
            <div className="flex items-center gap-2 text-sm">
              {useCloud ? (
                <div className="flex items-center gap-1.5 text-green-600">
                  {saving ? (
                    <Loader2 className="animate-spin" size={14} />
                  ) : (
                    <Cloud size={14} />
                  )}
                  <span>{saving ? 'Saving...' : 'Cloud sync'}</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-gray-500">
                  <CloudOff size={14} />
                  <span>Local only</span>
                </div>
              )}
            </div>
          </div>

          {error && (
            <div className="mt-2 text-sm text-amber-600 bg-amber-50 px-3 py-1.5 rounded">
              {error}
            </div>
          )}

          <div className="flex gap-2 mt-3">
            <button
              onClick={exportData}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 flex items-center gap-2 text-sm"
            >
              <Download size={16} /> Export to Markdown
            </button>
            <button
              onClick={resetToDefault}
              className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2 text-sm"
            >
              <RotateCcw size={16} /> Reset to Default
            </button>
          </div>

          {lastSaved && (
            <p className="text-xs text-gray-500 mt-2">
              Last saved: {lastSaved.toLocaleTimeString()}
            </p>
          )}

          <div className="flex gap-1 mt-4 bg-gray-100 p-1 rounded-lg w-fit">
            <button
              onClick={() => setViewMode('users')}
              className={`px-3 py-1.5 text-sm rounded-md flex items-center gap-1.5 transition-all ${
                viewMode === 'users'
                  ? 'bg-white text-gray-900 shadow-sm font-medium'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Users size={14} /> By User
            </button>
            <button
              onClick={() => setViewMode('buckets')}
              className={`px-3 py-1.5 text-sm rounded-md flex items-center gap-1.5 transition-all ${
                viewMode === 'buckets'
                  ? 'bg-white text-gray-900 shadow-sm font-medium'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FolderKanban size={14} /> By Bucket
            </button>
          </div>
        </div>

        {viewMode === 'users' ? (
          <div className="grid grid-cols-12 gap-4">
            {/* Left Sidebar */}
            <div className="col-span-3">
              <UserList
                data={data}
                selectedUser={selectedUser}
                onSelectUser={handleSelectUser}
              />
            </div>

            {/* Middle - Experiences List */}
            <div className="col-span-4">
              <ExperienceList
                userData={selectedUser ? data[selectedUser] : null}
                selectedStage={selectedStage}
                onSelectStage={handleSelectStage}
                onAddStage={addStage}
              />
            </div>

            {/* Right - Details */}
            <div className="col-span-5">
              <ExperienceDetail
                stage={selectedStage}
                onUpdateStage={updateStage}
              />
            </div>
          </div>
        ) : (
          <BucketView data={data} />
        )}
      </div>
    </div>
  );
}
