import { colorMap } from '../data/initialData';

export function UserList({ data, selectedUser, onSelectUser }) {
  const users = Object.keys(data);
  const internalUsers = users.filter(userId => data[userId].type === 'internal');
  const externalSystems = users.filter(userId => data[userId].type === 'external');

  const UserButton = ({ userId }) => {
    const user = data[userId];
    const colors = colorMap[user.color];
    const isSelected = selectedUser === userId;

    return (
      <button
        onClick={() => onSelectUser(userId)}
        className={`w-full text-left px-3 py-2.5 rounded-lg border-2 transition-all text-sm ${
          isSelected ? `${colors.selected} ${colors.text}` : `border-gray-200 hover:border-gray-300`
        }`}
      >
        <div className="font-medium">{user.name}</div>
        <div className="text-xs text-gray-500 mt-0.5">
          {user.stages.length} experiences
        </div>
      </button>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h2 className="text-sm font-semibold mb-3 text-gray-700">Actors & Systems</h2>

      <div className="mb-4">
        <h3 className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Internal Users</h3>
        <div className="space-y-2">
          {internalUsers.map(userId => <UserButton key={userId} userId={userId} />)}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">External Systems</h3>
        <div className="space-y-2">
          {externalSystems.map(userId => <UserButton key={userId} userId={userId} />)}
        </div>
      </div>
    </div>
  );
}
