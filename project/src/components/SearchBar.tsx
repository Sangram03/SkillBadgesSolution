import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SearchBarProps } from '../types';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a skill badge..."
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
      </div>
    </form>
  );
};

export default SearchBar;