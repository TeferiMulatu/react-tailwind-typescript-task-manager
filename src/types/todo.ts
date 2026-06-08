export interface Task {
  id: string;
  title: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
  createdAt: string;
  dueDate?: string;
}

export type FilterStatus = 'all' | 'active' | 'completed';
export type FilterPriority = 'all' | 'high' | 'medium' | 'low';

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}