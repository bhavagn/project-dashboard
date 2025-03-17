import { Task } from '../types';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartsProps {
  tasks: Task[];
}

export default function Charts({ tasks }: ChartsProps) {
  const statusData = tasks.reduce((acc, task) => {
    const status = acc.find(s => s.name === task.status);
    if (status) {
      status.value++;
    } else {
      acc.push({ name: task.status, value: 1 });
    }
    return acc;
  }, [] as { name: string; value: number }[]);

  const categoryData = tasks.reduce((acc, task) => {
    const category = acc.find(c => c.name === task.category);
    if (category) {
      category.value++;
    } else {
      acc.push({ name: task.category, value: 1 });
    }
    return acc;
  }, [] as { name: string; value: number }[]);

  const COLORS = ['#10B981', '#F59E0B', '#EF4444', '#6B7280'];

  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Status Distribution</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={statusData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {statusData.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Category Distribution</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={categoryData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
