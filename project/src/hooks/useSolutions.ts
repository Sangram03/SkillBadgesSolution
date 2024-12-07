import { useState, useCallback } from 'react';
import { Solution } from '../types';

const initialSolutions: Solution[] = [
  {
    id: '1',
    badgeName: 'APIs Explorer: App Engine',
    solution: 'https://github.com/example/cloud-architecture-solution',
    difficulty: 'Easy',
    code: `curl -LO https://raw.githubusercontent.com/Sangram03/SkillBadgesSolution/main/Solution/ApiExplorer.sh
chmod +x ApiExplorer.sh
./ApiExplorer.sh
`,
    addedBy: 'Sangram Das',
    dateAdded: '07-12-2024',
  },
    {
      "id": "2",
      "badgeName": "The Arcade Trivia December 2024 Week 1",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `// Correct commands and storage-related answers for Google Cloud:
    
    
    // ### 1. Command to copy files to your Cloud Storage bucket:
    // Answer: gcloud storage cp
    
    
    // ### 2. Command to update Google Cloud Storage buckets:
    // Answer: gcloud storage buckets update
    
    
    // ### 3. Command to check the lifecycle configuration of a bucket:
    // Answer: gcloud storage buckets describe
    
    
    
    // ### 4. Command to update objects in Cloud Storage:
    // Answer: gcloud storage objects update
    
    
    // ### 5. Storage engine for analytics and AI tools:
    // Answer: BigLake
    
    
    
    // ### 6. Command to create a Google Cloud Storage bucket:
    // Answer: gcloud storage buckets create
    
    
    
    `,
      
      addedBy: "Sangram Das",
      dateAdded: "2024-12-07"
    },
    
    {
      "id": "3",
      "badgeName": "The Arcade Trivia December 2024 Week 2",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `// Correct answers for IAM roles and Cloud commands:
    
    // ---
    
    // ### 1. IAM Role to create objects, folders, and managed folders:
    // Answer: Storage Object Creator
    
    // ---
    
    // ### 2. IAM Role for full object and folder management (create, view, update, delete):
    // Answer: Object Admin
    
    // --- 
    
    // ### 3. IAM Role to grant read-only access to a Cloud Storage data lake for BigQuery:
    // Answer: Storage Object Viewer
    
    // --- 
    
    // ### 4. IAM Role for complete management capabilities over objects and folders:
    // Answer: Storage Object Admin
    
    // --- 
    
    // ### 5. Google Cloud's generative AI-powered assistance for users:
    // Answer: Gemini
    
    // --- 
    
    // ### 6. Command to enable the Cloud AI Companion API for Gemini:
    // Answer: gcloud services enable
    
    // ---
    
    `,
    
      addedBy: "Sangram Das",
      dateAdded: "2024-12-07"
    },
    {
      "id": "4",
      "badgeName": "The Arcade Trivia December 2024 Week 3",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Medium",
      "code": `// Correct answers for Google Cloud services and commands:
    
    // ---
    
    // ### 1. Google Cloud's AI-ready analytics data warehouse:
    // Answer: BigQuery
    
    // ---
    
    // ### 2. Command in BigQuery to display information about a specific resource:
    // Answer: bq show
    
    // --- 
    
    // ### 3. Fully managed database service integrating relational, graph, key-value, and search capabilities:
    // Answer: Cloud Spanner
    
    // --- 
    
    // ### 4. Fully managed database service for PostgreSQL and MySQL databases:
    // Answer: Cloud SQL
    
    // --- 
    
    // ### 5. Google Cloud API for detecting PII and privacy-sensitive data:
    // Answer: Cloud Data Loss Prevention
    
    // --- 
    
    // ### 6. Command to upload the curl response to Cloud Storage:
    // Answer: gsutil cp
    
    // ---
    
    `,
      addedBy: "Sangram Das",
      dateAdded: "2024-12-07"
    }
    
    
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