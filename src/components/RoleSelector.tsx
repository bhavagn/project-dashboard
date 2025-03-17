import { Role } from '../types';

interface RoleSelectorProps {
  selectedRole: Role;
  onRoleChange: (role: Role) => void;
}

export function RoleSelector({ selectedRole, onRoleChange }: RoleSelectorProps) {
  const roles: Role[] = ['CEO', 'VP', 'PM', 'EM'];

  return (
    <select
      value={selectedRole}
      onChange={(e) => onRoleChange(e.target.value as Role)}
      className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {roles.map((role) => (
        <option key={role} value={role}>
          {role}
        </option>
      ))}
    </select>
  );
}
