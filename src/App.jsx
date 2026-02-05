import { useState } from 'react';
import { Download, RotateCcw } from 'lucide-react';
import { UserList } from './components/UserList';
import { ExperienceList } from './components/ExperienceList';
import { ExperienceDetail } from './components/ExperienceDetail';
import { initialData } from './data/initialData';
import { useLocalStorage } from './hooks/useLocalStorage';

const STORAGE_KEY = 'alpha-experience-chunks-data';

export default function App() {
  const [data, setData] = useLocalStorage(STORAGE_KEY, initialData);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedStage, setSelectedStage] = useState(null);

  const handleSelectUser = (userId) => {
    setSelectedUser(userId);
    setSelectedStage(null);
  };

  const handleSelectStage = (stage) => {
    setSelectedStage(stage);
  };

  const updateStage = (field, value) => {
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

    // Update selectedStage to reflect the change
    setSelectedStage(prev => ({ ...prev, [field]: value }));
  };

  const updateOwner = (ownerType, value) => {
    if (!selectedUser || !selectedStage) return;

    setData(prev => ({
      ...prev,
      [selectedUser]: {
        ...prev[selectedUser],
        stages: prev[selectedUser].stages.map(stage =>
          stage.id === selectedStage.id
            ? { ...stage, owner: { ...stage.owner, [ownerType]: value } }
            : stage
        )
      }
    }));

    // Update selectedStage to reflect the change
    setSelectedStage(prev => ({
      ...prev,
      owner: { ...prev.owner, [ownerType]: value }
    }));
  };

  const addStage = () => {
    if (!selectedUser) return;

    const newId = `${selectedUser[0]}${Date.now()}`;
    const newStage = {
      id: newId,
      name: "New Experience",
      userIntent: "I want to...",
      currentState: "Description of current state...",
      futureState: "Description of future state...",
      owner: { product: "TBD", tech: "TBD" }
    };

    setData(prev => ({
      ...prev,
      [selectedUser]: {
        ...prev[selectedUser],
        stages: [...prev[selectedUser].stages, newStage]
      }
    }));
  };

  const deleteStage = () => {
    if (!selectedUser || !selectedStage) return;

    if (window.confirm("Are you sure you want to delete this experience?")) {
      setData(prev => ({
        ...prev,
        [selectedUser]: {
          ...prev[selectedUser],
          stages: prev[selectedUser].stages.filter(stage => stage.id !== selectedStage.id)
        }
      }));
      setSelectedStage(null);
    }
  };

  const resetToDefault = () => {
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
        md += `**User Intent**: ${stage.userIntent}\n\n`;
        md += `**Current State (Maintenance)**:\n${stage.currentState}\n\n`;
        md += `**Future State**:\n${stage.futureState}\n\n`;
        md += `**Owner**:\n- Product: ${stage.owner.product}\n- Tech Lead: ${stage.owner.tech}\n\n`;
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
        md += `**User Intent**: ${stage.userIntent}\n\n`;
        md += `**Current State (Maintenance)**:\n${stage.currentState}\n\n`;
        md += `**Future State**:\n${stage.futureState}\n\n`;
        md += `**Owner**:\n- Product: ${stage.owner.product}\n- Tech Lead: ${stage.owner.tech}\n\n`;
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

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Alpha Experience Chunks</h1>
          <p className="text-gray-600 text-sm">Define ownership structure by user experiences</p>
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
          <p className="text-xs text-gray-500 mt-2">Changes are automatically saved to your browser</p>
        </div>

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
              onUpdateOwner={updateOwner}
              onDeleteStage={deleteStage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
