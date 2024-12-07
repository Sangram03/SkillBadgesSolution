import { useState, useCallback } from 'react';
import { Solution } from '../types';

const initialSolutions: Solution[] = [
  {
    id: '1',
    badgeName: 'APIs Explorer: App Engine',
    solution: '#',
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
      "code": `
    
    
    1️⃣. Command to copy files to your Cloud Storage bucket:
    🟢 Answer: gcloud storage cp
    
    
    2️⃣. Command to update Google Cloud Storage buckets:
    🟢Answer: gcloud storage buckets update
    
    
    3️⃣. Command to check the lifecycle configuration of a bucket:
    🟢Answer: gcloud storage buckets describe
    
    
    
    4️⃣. Command to update objects in Cloud Storage:
    🟢Answer: gcloud storage objects update
    
    
    5️⃣. Storage engine for analytics and AI tools:
    🟢Answer: BigLake
    
    
    
    6️⃣. Command to create a Google Cloud Storage bucket:
    🟢Answer: gcloud storage buckets create
    
    
    
    `,
      
      addedBy: "Sangram Das",
      dateAdded: "2024-12-07"
    },
    
    {
      "id": "3",
      "badgeName": "The Arcade Trivia December 2024 Week 2",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `

1️⃣. IAM Role to create objects, folders, and managed folders:  
🟢 Answer: Storage Object Creator  


2️⃣. IAM Role for full object and folder management (create, view, update, delete):  
🟢 Answer: Storage Admin  


3️⃣. IAM Role to grant read-only access to a Cloud Storage data lake for BigQuery:  
🟢 Answer: Storage Object Viewer  


4️⃣. IAM Role for complete management capabilities over objects and folders:  
🟢 Answer: Storage Admin  


5️⃣. Google Cloud's generative AI-powered assistance for users:  
🟢 Answer: Gemini  


6️⃣. Command to enable the Cloud AI Companion API for Gemini:  
🟢 Answer: gcloud services enable 

    `,
    
      addedBy: "Sangram Das",
      dateAdded: "2024-12-07"
    },
    {
      "id": "4",
      "badgeName": "The Arcade Trivia December 2024 Week 3",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Medium",
      "code": `
    
    1️⃣. Google Cloud's AI-ready analytics data warehouse:
    🟢Answer: BigQuery
    
    
    2️⃣. Command in BigQuery to display information about a specific resource:
    🟢Answer: bq show
    

    
    3️⃣. Fully managed database service integrating relational, graph, key-value, and search capabilities:
    🟢Answer: Cloud Spanner
    

    
    4️⃣. Fully managed database service for PostgreSQL and MySQL databases:
    🟢Answer: Cloud SQL
    

    
    5️⃣. Google Cloud API for detecting PII and privacy-sensitive data:
    🟢Answer: Cloud Data Loss Prevention
    

    
    6️⃣. Command to upload the curl response to Cloud Storage:
    🟢Answer: gsutil cp
    
    
    `,
      addedBy: "Sangram Das",
      dateAdded: "2024-12-07"
    },
    {
      "id": "5",
      "badgeName": "The Arcade Trivia December 2024 Week 4",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `

1️⃣. What command do you use to create an external application Load Balancer with backend buckets?  
🟢 Answer: gcloud compute backend-buckets create  

2️⃣. What command would you use to configure URL maps for directing traffic to backend buckets?  
🟢 Answer: gcloud compute url-maps create  

3️⃣. What command should you use to delete a bucket and all of its contents in Cloud Storage?  
🟢 Answer: gcloud storage rm  

4️⃣. What command would you use to remove the CORS settings from a bucket?  
🟢 Answer: gcloud storage buckets update gs://BUCKET_NAME --clear-cors  

5️⃣. Which of the following statements effectively removes duplicate rows and returns only the unique entries?  
🟢 Answer: SELECT DISTINCT  

6️⃣. Which of the following statements will return all rows, including duplicates?  
🟢 Answer: SELECT ALL  

    `,
    
      addedBy: "Sangram Das",
      dateAdded: "2024-12-07"
    },
    {
      "id": "6",
      "badgeName": "mini lab : Cloud Storage : 3",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/Techcps/GSP/master/mini%20lab%20%3A%20Cloud%20Storage%20%3A%203/techcps.sh
sudo chmod +x techcps.sh
./techcps.sh`,
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "7",
      "badgeName": "mini lab : Cloud Storage : 6",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/Techcps/GSP/master/mini%20lab%20%3A%20Cloud%20Storage%20%3A%203/techcps.sh
sudo chmod +x techcps.sh
./techcps.sh`,
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "7",
      "badgeName": "Explore an Ecommerce Dataset with SQL in BigQuery",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/Techcps/GSP-Short-Trick/master/Exploring%20Your%20Ecommerce%20Dataset%20with%20SQL%20in%20Google%20BigQuery/techcpsgsp407.sh
sudo chmod +x techcpsgsp407.sh
./techcpsgsp407.sh`,
    
      addedBy: "Techcps",
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