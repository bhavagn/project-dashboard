import { useState } from 'react';
import { Role, Status } from '../types';
import KPISection from './KPISection';
import TaskList from './TaskList';
import Charts from './Charts';
import { mockTasks } from '../data/mockData';

interface DashboardProps {
  role: Role;
}

export default function Dashboard({ role }: DashboardProps) {
  const [statusFilter, setStatusFilter] = useState<Status | 'All'>('All');
  const [sortBy, setSortBy] = useState<'priority' | 'confidence' | 'risk'>('priority');

  const filteredTasks = mockTasks.filter(task => 
    statusFilter === 'All' ? true : task.status === statusFilter
  ).sort((a, b) => b[sortBy] - a[sortBy]);

  const getRelevantTasks = (role: Role) => {
    switch (role) {
      case 'CEO':
        return filteredTasks.filter(task => task.priority >= 8);
      case 'VP':
        return filteredTasks.filter(task => task.priority >= 6);
      case 'PM':
        return filteredTasks;
      case 'EM':
        return filteredTasks.filter(task => task.category === 'Engineering');
      default:
        return filteredTasks;
    }
  };

  const relevantTasks = getRelevantTasks(role);

  return (
    <div className="space-y-8">
      <KPISection tasks={relevantTasks} role={role} />
      
      <div className="flex gap-4 mb-6">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as Status | 'All')}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg"
        >
          <option value="All">All Status</option>
          <option value="On Track">On Track</option>
          <option value="At Risk">At Risk</option>
          <option value="Blocked">Blocked</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'priority' | 'confidence' | 'risk')}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg"
        >
          <option value="priority">Sort by Priority</option>
          <option value="confidence">Sort by Confidence</option>
          <option value="risk">Sort by Risk</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <TaskList tasks={relevantTasks} />
        </div>
        <div>
          <Charts tasks={relevantTasks} />
        </div>
      </div>
    </div>
  );
}
