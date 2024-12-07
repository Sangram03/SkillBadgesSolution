import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SolutionCard from './components/SolutionCard';
import Background from './components/Background';
import { ThemeProvider } from './context/ThemeContext';
import { useSolutions } from './hooks/useSolutions';

function App() {
  const { solutions, selectedSolution, handleSearch, selectSolution } = useSolutions();

  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        <Background />
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col items-center mb-12">
            <SearchBar onSearch={handleSearch} />
          </div>

          <div className="grid grid-cols-1 gap-6">
            {solutions.map((solution) => (
              <SolutionCard 
                key={solution.id} 
                solution={solution}
                isSelected={selectedSolution?.id === solution.id}
                onSelect={selectSolution}
              />
            ))}
          </div>

          {solutions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300">
                No solutions found. Try a different search term.
              </p>
            </div>
          )}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;