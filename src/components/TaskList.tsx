import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'On Track':
        return 'bg-status-green';
      case 'At Risk':
        return 'bg-status-yellow';
      case 'Blocked':
        return 'bg-status-red';
      case 'Completed':
        return 'bg-gray-500';
      default:
        return 'bg-gray-700';
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">{task.title}</h3>
              <div className={`px-2 py-1 rounded-full text-xs ${getStatusColor(task.status)}`}>
                {task.status}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <p>Priority: {task.priority}/10</p>
                <p>Confidence: {task.confidence}%</p>
                <p>Risk: {task.risk}%</p>
              </div>
              <div>
                <p>Progress: {task.progress}%</p>
                <p>ETA: {task.eta}</p>
                <p>Assignee: {task.assignee}</p>
              </div>
            </div>

            {(task.blockers.length > 0 || task.dependencies.length > 0) && (
              <div className="mt-3 pt-3 border-t border-gray-600 text-sm">
                {task.blockers.length > 0 && (
                  <div className="text-red-400">
                    Blockers: {task.blockers.join(', ')}
                  </div>
                )}
                {task.dependencies.length > 0 && (
                  <div className="text-blue-400">
                    Dependencies: {task.dependencies.join(', ')}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
