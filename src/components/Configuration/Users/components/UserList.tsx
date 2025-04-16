import { FiMail, FiShield, FiUserCheck, FiSettings } from 'react-icons/fi';
import { User, Role } from '@/types/user';

interface UserCardProps {
  user: User;
}

function translateRole(role: Role): string {
  const roleMap = {
    [Role.admin]: 'Administrador',
    [Role.supervisor]: 'Supervisor',
    [Role.operator]: 'Operador'
  };
  return roleMap[role];
}

function UserCard({ user }: UserCardProps) {
  const roleConfig = {
    [Role.admin]: {
      color: 'bg-purple-100 text-purple-800',
      icon: <FiShield className="w-4 h-4 mr-1.5" />
    },
    [Role.supervisor]: {
      color: 'bg-blue-100 text-blue-800',
      icon: <FiUserCheck className="w-4 h-4 mr-1.5" />
    },
    [Role.operator]: {
      color: 'bg-orange-100 text-orange-800',
      icon: <FiSettings className="w-4 h-4 mr-1.5" />
    }
  }[user.role];

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm mb-4 transition-all hover:shadow-md">
      <div className="flex justify-between items-start gap-4">
        <div className="flex items-start gap-4 flex-grow">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg leading-tight">
              {user.firstName} {user.lastName}
            </h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center text-sm text-gray-600">
                <FiMail className="mr-2 text-gray-400" />
                <span>{user.email}</span>
              </div>
            </div>
          </div>
        </div>

        <span className={`px-3 py-1.5 rounded-full text-sm flex items-center shrink-0 ${roleConfig.color}`}>
          {roleConfig.icon}
          {translateRole(user.role)}
        </span>
      </div>
    </div>
  );
}

interface UserListProps {
  users: User[];
}

export function UserList({ users }: UserListProps) {
  return (
    <div className="mt-4 space-y-3">
      {users.map((user) => (
        <UserCard key={user.email} user={user} />
      ))}
    </div>
  );
}
