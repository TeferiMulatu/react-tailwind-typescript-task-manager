import React from 'react';
import { motion } from 'framer-motion';
import type { Task } from '../types/todo';
import { useTodo } from '../context/TodoContext';
import { Trash2, Check, Calendar } from 'lucide-react';

interface TodoItemProps {
  task: Task;
}

export const TodoItem: React.FC<TodoItemProps> = ({ task }) => {
  const { toggleTask, deleteTask } = useTodo();

  const priorityClasses = {
    high: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
    medium: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    low: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -2, transition: { duration: 0.1 } }}
      transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      className={`p-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl flex items-start justify-between gap-4 group transition-all duration-200 ${
        task.completed ? 'opacity-50 dark:opacity-40 bg-slate-50/50 dark:bg-slate-900/10' : ''
      }`}
    >
      <div className="flex items-start gap-4 flex-1">
        <button
          onClick={() => toggleTask(task.id)}
          className={`mt-1 flex-shrink-0 w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200 ${
            task.completed
              ? 'bg-slate-900 border-slate-900 text-white dark:bg-slate-100 dark:border-slate-100 dark:text-slate-900'
              : 'border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500'
          }`}
        >
          {task.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
        </button>

        <div className="flex flex-col gap-2 flex-1">
          <p
            className={`text-sm leading-relaxed font-medium text-slate-800 dark:text-slate-200 transition-all ${
              task.completed ? 'line-through decoration-slate-400/50 text-slate-400 dark:text-slate-500' : ''
            }`}
          >
            {task.title}
          </p>

          <div className="flex flex-wrap items-center gap-2">
           
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${priorityClasses[task.priority]}`}>
              {task.priority === 'high' ? 'High' : task.priority === 'medium' ? 'Medium' : 'Low'}
            </span>

            {task.dueDate && (
              <span className="flex items-center gap-1 text-[11px] font-medium text-slate-400 dark:text-slate-500">
                <Calendar className="w-3 h-3" />
                {task.dueDate}
              </span>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="opacity-0 group-hover:opacity-100 p-2 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 rounded-xl transition-all duration-150 flex-shrink-0 self-center"
      >
        <Trash2 className="w-4 h-4 text-slate-400 hover:text-rose-500 transition-colors" />
      </button>
    </motion.div>
  );
};