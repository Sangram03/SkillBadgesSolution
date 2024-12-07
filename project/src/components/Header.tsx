import React from 'react';
import { Award } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Skill Badge Solutions
            </h1>
          </div>
          <ThemeToggle />
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Find solutions for your skill badge challenges
        </p>
      </div>
    </header>
  );
};

export default Header;