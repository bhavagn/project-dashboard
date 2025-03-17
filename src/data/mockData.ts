import { Task } from '../types';

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Implement Authentication System',
    status: 'On Track',
    priority: 9,
    confidence: 85,
    risk: 20,
    progress: 60,
    dependencies: ['Database Setup'],
    blockers: [],
    eta: '2025-04-01',
    assignee: 'John Doe',
    category: 'Engineering'
  },
  {
    id: '2',
    title: 'User Interface Redesign',
    status: 'At Risk',
    priority: 8,
    confidence: 70,
    risk: 40,
    progress: 30,
    dependencies: ['Design System'],
    blockers: ['Pending Design Review'],
    eta: '2025-03-25',
    assignee: 'Jane Smith',
    category: 'Design'
  },
  {
    id: '3',
    title: 'Performance Optimization',
    status: 'Blocked',
    priority: 7,
    confidence: 60,
    risk: 60,
    progress: 20,
    dependencies: ['Monitoring Setup'],
    blockers: ['Infrastructure Issues'],
    eta: '2025-04-10',
    assignee: 'Mike Johnson',
    category: 'Engineering'
  },
  {
    id: '4',
    title: 'Market Research',
    status: 'Completed',
    priority: 6,
    confidence: 100,
    risk: 0,
    progress: 100,
    dependencies: [],
    blockers: [],
    eta: '2025-03-15',
    assignee: 'Sarah Wilson',
    category: 'Research'
  },
  {
    id: '5',
    title: 'API Documentation',
    status: 'On Track',
    priority: 5,
    confidence: 90,
    risk: 10,
    progress: 75,
    dependencies: ['API Development'],
    blockers: [],
    eta: '2025-03-30',
    assignee: 'Tom Brown',
    category: 'Documentation'
  },
  {
    id: '6',
    title: 'Security Audit',
    status: 'At Risk',
    priority: 9,
    confidence: 65,
    risk: 50,
    progress: 40,
    dependencies: ['Authentication System'],
    blockers: ['Pending External Review'],
    eta: '2025-04-15',
    assignee: 'Alice Green',
    category: 'Security'
  }
];
