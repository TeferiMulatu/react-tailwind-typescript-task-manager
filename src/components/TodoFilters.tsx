import React from 'react';
import { useTodo } from '../context/TodoContext';
import type { FilterStatus, FilterPriority } from '../types/todo';
import { SlidersHorizontal } from 'lucide-react';

export const TodoFilters: React.FC = () => {
  const { filterStatus, filterPriority, setFilterStatus, setFilterPriority } = useTodo();

  const statuses: { label: string; value: FilterStatus }[] = [
    { label: 'All Tasks', value: 'all' },       /* SIMPLIFIED: Changed from "All Routines" */
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ];

  const priorities: { label: string; value: FilterPriority }[] = [
    { label: 'All Priorities', value: 'all' },
    { label: 'High Priority', value: 'high' },   /* SIMPLIFIED: Changed from "High Threat" */
    { label: 'Medium Priority', value: 'medium' },
    { label: 'Low Priority', value: 'low' },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between w-full p-4 bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
        <SlidersHorizontal className="w-4 h-4" />
        {/* SIMPLIFIED: Changed from "Sorting Engine" */}
        <span>Filters</span>
      </div>
      <div className="flex flex-wrap gap-2 w-full sm:w-auto">
        <div className="flex bg-white dark:bg-slate-900 p-1 border border-slate-200/60 dark:border-slate-800/60 rounded-xl w-full sm:w-auto">
          {statuses.map((s) => (
            <button
              key={s.value}
              onClick={() => setFilterStatus(s.value)}
              className={`flex-1 sm:flex-initial px-4 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                filterStatus === s.value
                  ? 'bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-100'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="flex bg-white dark:bg-slate-900 p-1 border border-slate-200/60 dark:border-slate-800/60 rounded-xl w-full sm:w-auto">
          {priorities.map((p) => (
            <button
              key={p.value}
              onClick={() => setFilterPriority(p.value)}
              className={`flex-1 sm:flex-initial px-4 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                filterPriority === p.value
                  ? 'bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-100'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};