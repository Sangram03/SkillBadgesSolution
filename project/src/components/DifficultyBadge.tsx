import React from 'react';
import { DifficultyBadgeProps } from '../types';

const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({ difficulty }) => {
  const getBadgeColors = () => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Hard':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getBadgeColors()}`}>
      {difficulty}
    </span>
  );
};

export default DifficultyBadge;