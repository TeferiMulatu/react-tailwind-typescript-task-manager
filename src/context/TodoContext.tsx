import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Task, FilterStatus, FilterPriority, ToastMessage } from '../types/todo';

interface TodoContextType {
  tasks: Task[];
  filterStatus: FilterStatus;
  filterPriority: FilterPriority;
  toasts: ToastMessage[];
  setFilterStatus: (status: FilterStatus) => void;
  setFilterPriority: (priority: FilterPriority) => void;
  addTask: (title: string, priority: 'high' | 'medium' | 'low', dueDate?: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  addToast: (message: string, type: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const PRE_SEEDED_TASKS: Task[] = [
  {
    id: 'seed-1',
    title: 'Refactor Online Auction Management System secure real-time bidding events.',
    priority: 'high',
    completed: false,
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    dueDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0]
  },
  {
    id: 'seed-2',
    title: 'Verify type-safe state tracking pipelines in Dynamic Content Delivery Flow.',
    priority: 'medium',
    completed: true,
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    dueDate: new Date(Date.now() + 86400000).toISOString().split('T')[0]
  },
  {
    id: 'seed-3',
    title: 'Review Vite + Tailwind CSS v4 native custom theme variable configuration.',
    priority: 'low',
    completed: false,
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
    dueDate: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0]
  }
];

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('taskflow-tasks');
    return saved ? JSON.parse(saved) : PRE_SEEDED_TASKS;
  });
  
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [filterPriority, setFilterPriority] = useState<FilterPriority>('all');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    localStorage.setItem('taskflow-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addToast = (message: string, type: 'success' | 'info' | 'error') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addTask = (title: string, priority: 'high' | 'medium' | 'low', dueDate?: string) => {
    const newTask: Task = {
      id: Math.random().toString(36).substring(2, 9),
      title: title.trim(),
      priority,
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate: dueDate || undefined,
    };
    setTasks((prev) => [newTask, ...prev]);
    addToast('Task added successfully!', 'success');
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          const updatedState = !task.completed;
          addToast(
            updatedState ? 'Task completed! Good job!' : 'Task moved back to active list.',
            'info'
          );
          return { ...task, completed: updatedState };
        }
        return task;
      })
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    addToast('Task deleted permanently.', 'error');
  };

  return (
    <TodoContext.Provider
      value={{
        tasks,
        filterStatus,
        filterPriority,
        toasts,
        setFilterStatus,
        setFilterPriority,
        addTask,
        toggleTask,
        deleteTask,
        addToast,
        removeToast,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error('useTodo must be used within a TodoProvider');
  return context;
};