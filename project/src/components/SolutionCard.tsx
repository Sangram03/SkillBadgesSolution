import React from 'react';
import { ExternalLink, Calendar, User, ChevronDown, ChevronUp } from 'lucide-react';
import { Solution } from '../types';
import CodeDisplay from './CodeDisplay';
import DifficultyBadge from './DifficultyBadge';

interface SolutionCardProps {
  solution: Solution;
  isSelected: boolean;
  onSelect: (solution: Solution) => void;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution, isSelected, onSelect }) => {
  const getLanguage = (code: string) => {
    if (code.includes('import tensorflow')) return 'python';
    if (code.includes('const ') || code.includes('function')) return 'javascript';
    return 'plaintext';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md 
                    border border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {solution.badgeName}
          </h3>
          <DifficultyBadge difficulty={solution.difficulty} />
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
          <User className="h-4 w-4" />
          <span className="text-sm">{solution.addedBy}</span>
          <span className="mx-2">•</span>
          <Calendar className="h-4 w-4" />
          <span className="text-sm">{solution.dateAdded}</span>
        </div>
        <div className="flex items-center justify-between">
          <a
            href={solution.solution}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 
                     hover:text-blue-700 dark:hover:text-blue-300"
          >
            <ExternalLink className="h-4 w-4" />
            View Solution
          </a>
          {solution.code && (
            <button
              onClick={() => onSelect(solution)}
              className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-400
                       hover:text-gray-800 dark:hover:text-gray-200"
            >
              {isSelected ? (
                <>
                  Hide Code
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show Code
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
      {isSelected && solution.code && (
        <div className="px-6 pb-6">
          <CodeDisplay 
            code={solution.code} 
            language={getLanguage(solution.code)} 
          />
        </div>
      )}
    </div>
  );
};

export default SolutionCard;