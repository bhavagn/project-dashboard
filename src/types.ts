export type Role = 'CEO' | 'VP' | 'PM' | 'EM';

export type Status = 'On Track' | 'At Risk' | 'Blocked' | 'Completed';

export interface Task {
  id: string;
  title: string;
  status: Status;
  priority: number;
  confidence: number;
  risk: number;
  progress: number;
  dependencies: string[];
  blockers: string[];
  eta: string;
  assignee: string;
  category: string;
}

export interface KPI {
  label: string;
  value: number;
  change: number;
  trend: 'up' | 'down';
}

export interface ChartData {
  name: string;
  value: number;
}
