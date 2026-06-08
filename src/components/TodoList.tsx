import React from 'react';
import { useTodo } from '../context/TodoContext';
import { TodoItem } from './TodoItem';
import { AnimatePresence, motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export const TodoList: React.FC = () => {
  const { tasks, filterStatus, filterPriority } = useTodo();

  const filteredTasks = tasks.filter((task) => {
    const matchStatus =
      filterStatus === 'all' ||
      (filterStatus === 'active' && !task.completed) ||
      (filterStatus === 'completed' && task.completed);

    const matchPriority = filterPriority === 'all' || task.priority === filterPriority;

    return matchStatus && matchPriority;
  });

  return (
    <div className="flex flex-col gap-3 min-h-[300px]">
      <AnimatePresence mode="popLayout">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => <TodoItem key={task.id} task={task} />)
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-16 px-4 bg-slate-50/50 dark:bg-slate-900/10 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl h-full flex-1"
          >
            <Terminal className="w-8 h-8 text-slate-300 dark:text-slate-700 mb-3" />
            
           
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              No tasks found here
            </p>
            
           
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
              Try changing your filters or add a brand new task above!
            </p>
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};