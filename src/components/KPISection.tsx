import { Role, Task } from '../types';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

interface KPISectionProps {
  tasks: Task[];
  role: Role;
}

export default function KPISection({ tasks }: KPISectionProps) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.status === 'Completed').length;
  const atRiskTasks = tasks.filter(t => t.status === 'At Risk').length;
  const blockedTasks = tasks.filter(t => t.status === 'Blocked').length;

  const kpis = [
    {
      label: 'Total Tasks',
      value: totalTasks,
      change: 5,
      trend: 'up' as const,
    },
    {
      label: 'Completion Rate',
      value: totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0,
      change: 2,
      trend: 'up' as const,
    },
    {
      label: 'At Risk',
      value: atRiskTasks,
      change: -1,
      trend: 'down' as const,
    },
    {
      label: 'Blockers',
      value: blockedTasks,
      change: -2,
      trend: 'down' as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi) => (
        <div
          key={kpi.label}
          className="bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">{kpi.label}</p>
              <p className="text-2xl font-bold mt-1">
                {kpi.label.includes('Rate') ? `${kpi.value}%` : kpi.value}
              </p>
            </div>
            <div className={`flex items-center ${
              kpi.trend === 'up' ? 'text-green-500' : 'text-red-500'
            }`}>
              {kpi.trend === 'up' ? (
                <ArrowUpIcon className="w-4 h-4" />
              ) : (
                <ArrowDownIcon className="w-4 h-4" />
              )}
              <span className="text-sm ml-1">{Math.abs(kpi.change)}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
