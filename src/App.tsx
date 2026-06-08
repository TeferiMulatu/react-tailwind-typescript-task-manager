import React from 'react';
import { TodoProvider } from './context/TodoContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { TodoStats } from './components/TodoStats';
import { TodoFilters } from './components/TodoFilters';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { Toast } from './components/Toast';
import { Sun, Moon, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';


const MainLayout: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const containerVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15, staggerChildren: 0.1 } }
  }as const;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased p-4 sm:p-6 lg:p-8 selection:bg-slate-900 selection:text-white dark:selection:bg-slate-100 dark:selection:text-slate-950">
      <motion.div 
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="max-w-7xl mx-auto flex flex-col gap-6"
      >
        {/* Main Application Header Bar */}
        <header className="flex justify-between items-center p-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 rounded-xl">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                
                <h1 className="text-base font-bold tracking-tight">Project Dashboard</h1>
                
                <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full font-mono font-medium">Workspace</span>
              </div>
              
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Welcome back, <span className="font-semibold text-slate-600 dark:text-slate-300">Developer</span></p>
            </div>
          </div>
          
          <button 
            onClick={toggleTheme}
            className="p-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-800/60 rounded-xl transition-all active:scale-[0.95]"
          >
            {theme === 'light' ? <Moon className="w-4 h-4 text-slate-600" /> : <Sun className="w-4 h-4 text-slate-300" />}
          </button>
        </header>

        {/* Welcome & Info Message Card */}
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-4xl">
            "A smooth task manager for developers to plan coding goals and track project progress in real time."
          </p>
        </div>

        {/* Statistics Dashboard Section */}
        <TodoStats />

        {/* Two-Column Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Side: Create New Task Panel */}
          <div className="lg:col-span-4 h-full">
            <TodoForm />
          </div>

          {/* Right Side: Filters and Task List Stream */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <TodoFilters />
            <TodoList />
          </div>
        </div>
      </motion.div>
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <MainLayout />
      </TodoProvider>
    </ThemeProvider>
  );
}