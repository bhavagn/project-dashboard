import { useState } from 'react';
import Dashboard from './components/Dashboard';
import { RoleSelector } from './components/RoleSelector';
import { Role } from './types';

function App() {
  const [selectedRole, setSelectedRole] = useState<Role>('CEO');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Project Dashboard v1.0</h1>
          <RoleSelector selectedRole={selectedRole} onRoleChange={setSelectedRole} />
        </div>
        <Dashboard role={selectedRole} />
      </div>
    </div>
  );
}

export default App;
