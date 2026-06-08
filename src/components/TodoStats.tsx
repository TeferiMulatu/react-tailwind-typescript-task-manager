import React from 'react';
import { useTodo } from '../context/TodoContext';
import { motion } from 'framer-motion';
import { Layers, CheckCircle, AlertTriangle, Activity } from 'lucide-react';

export const TodoStats: React.FC = () => {
  const { tasks } = useTodo();

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  const high = tasks.filter((t) => t.priority === 'high' && !t.completed).length;
  const medium = tasks.filter((t) => t.priority === 'medium' && !t.completed).length;
  const low = tasks.filter((t) => t.priority === 'low' && !t.completed).length;

  const cardVariants = {
    hover: { y: -4, scale: 1.01, transition: { type: 'spring', stiffness: 150, damping: 20 } }as const,
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {/* CARD 1: TOTAL TASKS */}
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl flex items-center justify-between"
      >
        <div>
         
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Total Tasks</p>
          <p className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">{total}</p>
        </div>
        <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl">
          <Layers className="w-6 h-6 text-slate-600 dark:text-slate-400" />
        </div>
      </motion.div>

      {/* CARD 2: PROGRESS PERCENTAGE */}
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl flex items-center justify-between"
      >
        <div>
          
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Progress Done</p>
          <p className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">{percentage}%</p>
        </div>
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
          <CheckCircle className="w-6 h-6 text-emerald-500" />
        </div>
      </motion.div>

      {/* CARD 3: HIGH & MEDIUM PRIORITY TASKS */}
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl flex items-center justify-between"
      >
        <div>
         
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">High / Medium</p>
          <p className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">{high} <span className="text-sm font-normal text-slate-400">/ {medium}</span></p>
        </div>
        <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl">
          <AlertTriangle className="w-6 h-6 text-rose-500" />
        </div>
      </motion.div>

      {/* CARD 4: LOW PRIORITY TASKS */}
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl flex items-center justify-between"
      >
        <div>
          
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Low Priority</p>
          <p className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">{low}</p>
        </div>
        <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl">
          <Activity className="w-6 h-6 text-amber-500" />
        </div>
      </motion.div>
    </div>
  );
};