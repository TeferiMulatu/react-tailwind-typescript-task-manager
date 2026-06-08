import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import { Plus, Calendar, ShieldAlert } from 'lucide-react';

export const TodoForm: React.FC = () => {
  const { addTask } = useTodo();
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('medium');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title, priority, dueDate);
    setTitle('');
    setPriority('medium');
    setDueDate('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 lg:p-8 bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl flex flex-col gap-5 h-full justify-between"
    >
      <div className="flex flex-col gap-4">
        <div>
          {/* SIMPLIFIED: Changed from "Task Dispatch Engine" */}
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Create New Task</h3>
          {/* SIMPLIFIED: Changed from "Inject functional task structures into the environment state." */}
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Add a new item to your project to-do list.</p>
        </div>

        <div className="flex flex-col gap-1.5">
          {/* SIMPLIFIED: Changed from "Context Title" */}
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Task Name</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
           
            placeholder="e.g., Fix the dark mode toggle button..."
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800 text-sm font-medium rounded-xl text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-slate-400 dark:focus:border-slate-600 transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            {/* SIMPLIFIED: Changed from "Severity Rank" */}
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5" /> Priority
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as 'high' | 'medium' | 'low')}
              className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800 text-sm font-medium rounded-xl text-slate-800 dark:text-slate-200 focus:outline-none focus:border-slate-400 dark:focus:border-slate-600 transition-colors"
            >
              {/* SIMPLIFIED: Changed option names to match everyday English */}
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            {/* SIMPLIFIED: Changed from "Target Deadline" */}
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> Due Date
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800 text-sm font-medium rounded-xl text-slate-800 dark:text-slate-200 focus:outline-none focus:border-slate-400 dark:focus:border-slate-600 transition-colors"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={!title.trim()}
        className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-950 text-sm font-bold rounded-xl flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
      >
        <Plus className="w-4 h-4" />
        {/* SIMPLIFIED: Changed from "Deploy Code Task" */}
        <span>Add Task</span>
      </button>
    </form>
  );
};