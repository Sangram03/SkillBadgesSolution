import { useState, useCallback } from 'react';
import { Solution } from '../types';

const initialSolutions: Solution[] = [
  {
    id: '1',
    badgeName: 'APIs Explorer: App Engine',
    solution: 'https://github.com/example/cloud-architecture-solution',
    difficulty: 'Easy',
    code: `curl -LO raw.githubusercontent.com/Techcps/GSP-Short-Trick/master/APIs%20Explorer%3A%20App%20Engine/techcps422.sh
sudo chmod +x techcps422.sh
./techcps422.sh
`,
    addedBy: 'Sangram Das',
    dateAdded: '07-12-2024',
  },
  {
    id: '2',
    badgeName: 'APIs Explorer: Cloud SQL',
    solution: 'https://github.com/example/ml-badge-solution',
    difficulty: 'Medium',
    code: `# Machine Learning Example
import tensorflow as tf
from sklearn.model_selection import train_test_split

def train_model(X, y):
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    
    model = tf.keras.Sequential([
        tf.keras.layers.Dense(64, activation='relu'),
        tf.keras.layers.Dense(32, activation='relu'),
        tf.keras.layers.Dense(1, activation='sigmoid')
    ])
    
    model.compile(optimizer='adam', loss='binary_crossentropy')
    model.fit(X_train, y_train, epochs=10)
    
    return model`,
    addedBy: 'Sangram Das',
    dateAdded: '07-12-2024',
  },
  {
    id: '3',
    badgeName: 'Web Development',
    solution: 'https://github.com/example/web-dev-solution',
    difficulty: 'Easy',
    code: `// Basic React Component
import React from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };
  
  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo, index) => (
        <div key={index}>{todo.text}</div>
      ))}
    </div>
  );
}`,
    addedBy: 'Admin',
    dateAdded: '2024-03-16',
  },
];

export const useSolutions = () => {
  const [solutions, setSolutions] = useState<Solution[]>(initialSolutions);
  const [filteredSolutions, setFilteredSolutions] = useState<Solution[]>(initialSolutions);
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  const handleSearch = useCallback((query: string) => {
    if (!query.trim()) {
      setFilteredSolutions(solutions);
      return;
    }

    const filtered = solutions.filter(solution =>
      solution.badgeName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSolutions(filtered);
  }, [solutions]);

  const addSolution = useCallback((newSolution: Omit<Solution, 'id' | 'dateAdded'>) => {
    const solution: Solution = {
      ...newSolution,
      id: Date.now().toString(),
      dateAdded: new Date().toISOString().split('T')[0],
    };
    setSolutions(prev => [...prev, solution]);
    setFilteredSolutions(prev => [...prev, solution]);
  }, []);

  const selectSolution = useCallback((solution: Solution) => {
    setSelectedSolution(selectedSolution?.id === solution.id ? null : solution);
  }, [selectedSolution]);

  return {
    solutions: filteredSolutions,
    selectedSolution,
    handleSearch,
    addSolution,
    selectSolution,
  };
};