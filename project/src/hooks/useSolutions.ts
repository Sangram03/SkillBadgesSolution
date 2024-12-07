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
      "id": "8",
      "badgeName": "Explore an Ecommerce Dataset with SQL in BigQuery",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/Techcps/GSP-Short-Trick/master/Exploring%20Your%20Ecommerce%20Dataset%20with%20SQL%20in%20Google%20BigQuery/techcpsgsp407.sh
sudo chmod +x techcpsgsp407.sh
./techcpsgsp407.sh`,
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "9",
      "badgeName": "Cloud Data Loss Prevention API: Qwik Start",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `export BUCKET_NAME=

curl -LO raw.githubusercontent.com/Techcps/GSP-Short-Trick/master/Data%20Loss%20Prevention%3A%20Qwik%20Start%20-%20JSON/techcps107.sh
sudo chmod +x techcps107.sh
./techcps107.sh`,
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "10",
      "badgeName": "mini lab: BigQuery : 1",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/Techcps/GSP/master/mini%20lab%3A%20BigQuery%20%3A%201/techcps.sh
sudo chmod +x techcps.sh
./techcps.sh`,
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "11",
      "badgeName": "mini lab : BigQuery : 2",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/Techcps/GSP/master/mini%20lab%20%3A%20BigQuery%20%3A%202/techcps.sh
sudo chmod +x techcps.sh
./techcps.sh`,
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "12",
      "badgeName": "mini lab : Cloud Storage : 4",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/Techcps/GSP/master/mini%20lab%20%3A%20Cloud%20Storage%20%3A%204/techcps.sh
sudo chmod +x techcps.sh
./techcps.sh`,
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "13",
      "badgeName": "mini lab : Cloud Storage : 5",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/Techcps/GSP/master/mini%20lab%20%3A%20Cloud%20Storage%20%3A%205/techcps.sh
sudo chmod +x techcps.sh
./techcps.sh`,
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "14",
      "badgeName": "Analyze data with Gemini assistance",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/Techcps/GSP/master/Analyze%20data%20with%20Gemini%20assistance/techcps.sh
sudo chmod +x techcps.sh
./techcps.sh`,
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "15",
      "badgeName": "Analyze data with Gemini assistance",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `export REGION=

curl -LO raw.githubusercontent.com/Techcps/GSP/master/Analyze%20data%20with%20Gemini%20assistance/techcps.sh
sudo chmod +x techcps.sh
./techcps.sh`,
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "16",
      "badgeName": "mini lab : Cloud Storage : 1",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/Techcps/GSP/master/mini%20lab%20%3A%20Cloud%20Storage%20%3A%201/techcps.sh
sudo chmod +x techcps.sh
./techcps.sh`,
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "17",
      "badgeName": "mini lab : Cloud Storage : 2",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/Techcps/GSP/master/mini%20lab%20%3A%20Cloud%20Storage%20%3A%202/techcps.sh
sudo chmod +x techcps.sh
./techcps.sh`,
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "18",
      "badgeName": "Secure BigLake Data: Challenge Lab",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `
      SELECT * EXCEPT(zip, latitude, ip_address, longitude) FROM REPLACE_YOUR_PROJECT_ID.online_shop.user_online_sessions LIMIT 1000
      `,
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "19",
      "badgeName": "2004Secure BigLake Data: Challenge Lab",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/Techcps/ARC/master/Secure%20BigLake%20Data%3A%20Challenge%20Lab/techcps129.sh
sudo chmod +x techcps129.sh
./techcps129.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "20",
      "badgeName": "Creating a Persistent Disk",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `export ZONE=
      curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Creating%20a%20Persistent%20Disk/gsp004.sh

sudo chmod +x gsp004.sh

./gsp004.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "21",
      "badgeName": "Creating a Virtual Machine",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Creating%20a%20Virtual%20Machine/gsp001.sh

sudo chmod +x gsp001.sh

./gsp001.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "22",
      "badgeName": "Creating a Persistent Disk",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `export ZONE=
      curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Creating%20a%20Persistent%20Disk/gsp004.sh

sudo chmod +x gsp004.sh

./gsp004.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "23",
      "badgeName": "Hosting a Web App on Google Cloud Using Compute Engine",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `export ZONE=
      curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Hosting%20a%20Web%20App%20on%20Google%20Cloud%20Using%20Compute%20Engine/gsp662-1.sh

sudo chmod +x gsp662-1.sh

./gsp662-1.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "24",
      "badgeName": "The Basics of Google Cloud Compute: Challenge Lab",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `
      # Create a bucket
      export ZONE=
      curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/The%20Basics%20of%20Google%20Cloud%20Compute%20Challenge%20Lab/arc120.sh

sudo chmod +x arc120.sh

./arc120.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "25",
      "badgeName": "Cloud Natural Language API: Qwik Start",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `
      #Commands in SSH
      curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Cloud%20Natural%20Language%20API%20Qwik%20Start/gsp097.sh

sudo chmod +x gsp097.sh

./gsp097.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "26",
      "badgeName": "Cloud Natural Language API: Qwik Start",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `Watch the Video`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "27",
      "badgeName": "Entity and Sentiment Analysis with the Natural Language API",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `export ZONE=
      #Go to VM instances
      curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Entity%20and%20Sentiment%20Analysis%20with%20the%20Natural%20Language%20API/gsp038.sh

sudo chmod +x gsp038.sh

./gsp038.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "28",
      "badgeName": "Analyze Sentiment with Natural Language API: Challenge Lab",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `export ZONE=
export API_KEY=
gcloud compute ssh lab-vm --zone=$ZONE --quiet --command "curl -LO https://raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Analyze%20Sentiment%20with%20Natural%20Language%20API%20Challenge%20Lab/arc130.sh && sudo chmod +x arc130.sh && ./arc130.sh"`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "29",
      "badgeName": "Analyze Sentiment with Natural Language API: Challenge Lab",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `export ZONE=
export API_KEY=
gcloud compute ssh lab-vm --zone=$ZONE --quiet --command "curl -LO https://raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Analyze%20Sentiment%20with%20Natural%20Language%20API%20Challenge%20Lab/arc130.sh && sudo chmod +x arc130.sh && ./arc130.sh"`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "30",
      "badgeName": "It Speaks! Create Synthetic Speech Using Text-to-Speech",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/quiccklabs/Labs_solutions/master/Create%20Synthetic%20Speech%20Using%20quicklab/quicklabgsp222.sh

sudo chmod +x quicklabgsp222.sh

./quicklabgsp222.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "31",
      "badgeName": "Translate Text with the Cloud Translation API",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Translate%20Text%20with%20the%20Cloud%20Translation%20API/gsp049.sh

sudo chmod +x gsp049.sh

./gsp049.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "32",
      "badgeName": "Speech to Text Transcription with the Cloud Speech API",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Speech%20to%20Text%20Transcription%20with%20the%20Cloud%20Speech%20API/gsp048-1.sh

sudo chmod +x gsp048-1.sh

./gsp048-1.sh
#Score Upto Task 3 then
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Speech%20to%20Text%20Transcription%20with%20the%20Cloud%20Speech%20API/gsp048-2.sh

sudo chmod +x gsp048-2.sh

./gsp048-2.sh
`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "33",
      "badgeName": "Cloud Speech API 3 Ways: Challenge Lab",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `export ZONE=$(gcloud compute instances list lab-vm --format 'csv[no-heading](zone)')
gcloud compute ssh lab-vm --project=$DEVSHELL_PROJECT_ID --zone=$ZONE --quiet
#Go to Credentials
export API_KEY=
export task_2_file_name=""
export task_3_request_file=""
export task_3_response_file=""
export task_4_sentence=""
export task_4_file=""
export task_5_sentence=""
export task_5_file=""
# then 
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Cloud%20Speech%20API%203%20Ways%20Challenge%20Lab/arc132.sh

sudo chmod +x arc132.sh

./arc132.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "34",
      "badgeName": "Speech-to-Text API: Qwik Start",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `export API_KEY=
      curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Google%20Cloud%20Speech-to-Text%20API%20Qwik%20Start/gsp119.sh

sudo chmod +x gsp119.sh

./gsp119.sh
      `,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "35",
      "badgeName": "Speaking with a Webpage - Streaming Speech Transcripts",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `export ZONE=
      curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Speaking%20with%20a%20Webpage%20-%20Streaming%20Speech%20Transcripts/gsp125-1.sh

sudo chmod +x gsp125-1.sh

./gsp125-1.sh
#CloudShell New Tab
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Speaking%20with%20a%20Webpage%20-%20Streaming%20Speech%20Transcripts/gsp125-2.sh

sudo chmod +x gsp125-2.sh

./gsp125-2.sh
#CloudShell Previous Tab
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Speaking%20with%20a%20Webpage%20-%20Streaming%20Speech%20Transcripts/gsp125-3.sh

sudo chmod +x gsp125-3.sh

./gsp125-3.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "36",
      "badgeName": "Speech to Text Transcription with the Cloud Speech API",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Speech%20to%20Text%20Transcription%20with%20the%20Cloud%20Speech%20API/gsp048-1.sh

sudo chmod +x gsp048-1.sh

./gsp048-1.sh
#Now Check The Score Upto Task 3 then Process Next.
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Speech%20to%20Text%20Transcription%20with%20the%20Cloud%20Speech%20API/gsp048-2.sh

sudo chmod +x gsp048-2.sh

./gsp048-2.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "37",
      "badgeName": "Using the Google Cloud Speech API: Challenge Lab",
      "solution": "https://github.com/example/ml-badge-solution",
      "difficulty": "Easy",
      "code": `# click+ CREATE CREDENTIALS

#Click API key

# Copy generated API key

# Run the following Commands in CloudShell
#Assign Veriables
export API_KEY=
export REQUEST1=
export RESPONSE1=
export REQUEST2=
export RESPONSE2=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Using%20the%20Google%20Cloud%20Speech%20API%20Challenge%20Lab/arc131.sh

sudo chmod +x arc131.sh

./arc131.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "38",
      "badgeName": "Manage Bigtable on Google Cloud",
      "solution": "https://www.youtube.com/watch?v=IWMnBUkNTcA",
      "difficulty": "Easy",
      "code": `#Watch The Video`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "39",
      "badgeName": "Designing and Querying Bigtable Schemas",
      "solution": "https://www.youtube.com/watch?v=IWMnBUkNTcA",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Designing%20and%20Querying%20Bigtable%20Schemas/gsp1053.sh

sudo chmod +x gsp1053.sh

./gsp1053.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "40",
      "badgeName": "Creating and Populating a Bigtable Instance",
      "solution": "https://www.youtube.com/watch?v=IWMnBUkNTcA",
      "difficulty": "Easy",
      "code": `export ZONE=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Creating%20and%20Populating%20a%20Bigtable%20Instance/gsp1054.sh

sudo chmod +x gsp1054.sh

./gsp1054.sh
# Go to Create job from template from here

 # Delete table & Instance`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "41",
      "badgeName": "Streaming Data to Bigtable",
      "solution": "https://www.youtube.com/watch?v=IWMnBUkNTcA",
      "difficulty": "Easy",
      "code": `export ZONE=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Streaming%20Data%20to%20Bigtable/gsp1055-1.sh

sudo chmod +x gsp1055-1.sh

./gsp1055-1.sh
# Run the following Commands in 2nd CloudShell tab
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Streaming%20Data%20to%20Bigtable/gsp1055-2.sh

sudo chmod +x gsp1055-2.sh

./gsp1055-2.sh
# then
cbt deletetable current_conditions

gcloud bigtable instances delete sandiego --quiet`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "42",
      "badgeName": "Monitoring and Managing Bigtable Health and Performance",
      "solution": "https://www.youtube.com/watch?v=IWMnBUkNTcA",
      "difficulty": "Easy",
      "code": `export ZONE=
# Check here and use another ZONE for  // sandiego-traffic-sensors-c2

curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Monitoring%20and%20Managing%20Bigtable%20Health%20and%20Performance/gsp1056.sh

sudo chmod +x gsp1056.sh

./gsp1056.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "43",
      "badgeName": "Create and Manage Bigtable Instances: Challenge Lab",
      "solution": "https://www.youtube.com/watch?v=IWMnBUkNTcA",
      "difficulty": "Easy",
      "code": `export ZONE=
export ZONE2=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Create%20and%20Manage%20Bigtable%20Instances%20Challenge%20Lab/gsp380.sh

sudo chmod +x gsp380.sh

./gsp380.sh
# Go to Dataflow Job`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-07"
    },
    {
      "id": "43",
      "badgeName": "Pub/Sub: Qwik Start - Console",
      "solution": "https://www.youtube.com/watch?v=IWMnBUkNTcA",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/PubSub%20Qwik%20Start%20-%20Console/gsp096.sh

sudo chmod +x gsp096.sh

./gsp096.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "44",
      "badgeName": "Cloud Scheduler: Qwik Start",
      "solution": "https://www.youtube.com/watch?v=IWMnBUkNTcA",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Cloud%20Scheduler%20Qwik%20Start/gsp401.sh

sudo chmod +x gsp401.sh

./gsp401.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "45",
      "badgeName": "Get Started with Pub/Sub: Challenge Lab",
      "solution": "https://www.youtube.com/watch?v=IWMnBUkNTcA",
      "difficulty": "Easy",
      "code": `# For form 1: Solution here
# Task 1. Publish a message to the topic.
# Task 2. View the message.
# Task 3. Create a Pub/Sub Snapshot for Pub/Sub topic.
# Run the following Commands in CloudShell
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Get%20Started%20with%20PubSub%20Challenge%20Lab/form_1.sh

sudo chmod +x form_1.sh

./form_1.sh
# Now check your progress, You will get score for all tasks..
# For form 2: Solution here
# Task 1. Create Pub/Sub schema.
# Task 2. Create Pub/Sub topic using schema.
# Task 3. Create a trigger cloud function with Pub/Sub topic
# Run the following Commands in CloudShell
export LOCATION=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Get%20Started%20with%20PubSub%20Challenge%20Lab/form_2.sh

sudo chmod +x form_2.sh

./form_2.sh
# Now check your progress, You will get score for all tasks..
# For form 3: Solution here
# Task 1. Set up Cloud Pub/Sub.
# Task 2. Create a Cloud Scheduler job.
# Task 3. Verify the results in Cloud Pub/Sub.
# Run the following Commands in CloudShell
export LOCATION=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Get%20Started%20with%20PubSub%20Challenge%20Lab/form_3.sh

sudo chmod +x form_3.sh

./form_3.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "46",
      "badgeName": "Dataplex: Qwik Start - Console",
      "solution": "https://www.youtube.com/watch?v=IWMnBUkNTcA",
      "difficulty": "Easy",
      "code": `export REGION=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Dataplex%20Qwik%20Start%20-%20Console/gsp1143.sh

sudo chmod +x gsp1143.sh

./gsp1143.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "47",
      "badgeName": "Dataplex: Qwik Start - Command Line",
      "solution": "https://www.youtube.com/watch?v=IWMnBUkNTcA",
      "difficulty": "Easy",
      "code": `export REGION=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Dataplex%20Qwik%20Start%20-%20Command%20Line/gsp1144.sh

sudo chmod +x gsp1144.sh

./gsp1144.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "48",
      "badgeName": "Tagging Dataplex Assets",
      "solution": "https://www.youtube.com/watch?v=IWMnBUkNTcA",
      "difficulty": "Easy",
      "code": `export REGION=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Tagging%20Dataplex%20Assets/gsp1145.sh

sudo chmod +x gsp1145.sh

./gsp1145.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "49",
      "badgeName": "Get Started with Dataplex: Challenge Lab",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `export LOCATION=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Get%20Started%20with%20Dataplex%20Challenge%20Lab/arc117.sh

sudo chmod +x arc117.sh

./arc117.sh
# Task 3. Create and apply a tag template to a zone
# Go to Templates from here
# follow video instructions`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "50",
      "badgeName": "Cloud IAM: Qwik Start",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `export USERNAME_2=


curl -LO raw.githubusercontent.com/quiccklabs/Labs_solutions/master/Cloud%20IAM%20Qwik%20Start/quicklabgsp064.sh

sudo chmod +x quicklabgsp064.sh

./quicklabgsp064.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "51",
      "badgeName": "Data Catalog: Qwik Start",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `export LOCATION=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Data%20Catalog%20Qwik%20Start/gsp729.sh

sudo chmod +x gsp729.sh

./gsp729.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "52",
      "badgeName": "BigLake: Qwik Start",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/BigLake%20Qwik%20Start/gsp1040.sh

sudo chmod +x gsp1040.sh

./gsp1040.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "53",
      "badgeName": "Secure BigLake Data: Challenge Lab",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": ` export USER_2=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/refs/heads/main/Secure%20BigLake%20Data%20Challenge%20Lab/arc129.sh

sudo chmod +x arc129.sh

./arc129.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "54",
      "badgeName": "APIs Explorer: Cloud Storage",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/APIs%20Explorer%20Cloud%20Storage/gsp421.sh

sudo chmod +x gsp421.sh

./gsp421.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "55",
      "badgeName": "Cloud Storage: Qwik Start - CLI/SDK",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `export REGION=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Cloud%20Storage%20Qwik%20Start%20-%20CLI%20SDK/gsp074.sh

sudo chmod +x gsp074.sh

./gsp074.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "56",
      "badgeName": "Google Cloud Storage - Bucket Lock",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Google%20Cloud%20Storage%20-%20Bucket%20Lock/gsp297.sh

sudo chmod +x gsp297.sh

./gsp297.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "57",
      "badgeName": "Get Started with Cloud Storage: Challenge Lab",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `export BUCKET_1=
export BUCKET_2=
export BUCKET_3=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Get%20Started%20with%20Cloud%20Storage%20Challenge%20Lab/arc111.sh

sudo chmod +x arc111.sh

./arc111.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "58",
      "badgeName": "Create a Virtual Machine",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Creating%20a%20Virtual%20Machine/gsp001.sh

sudo chmod +x gsp001.sh

./gsp001.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "59",
      "badgeName": "Creating a Persistent Disk",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `export ZONE=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Creating%20a%20Persistent%20Disk/gsp004.sh

sudo chmod +x gsp004.sh

./gsp004.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "60",
      "badgeName": "Hosting a Web App on Google Cloud Using Compute Engine",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `export ZONE=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Hosting%20a%20Web%20App%20on%20Google%20Cloud%20Using%20Compute%20Engine/gsp662-1.sh

sudo chmod +x gsp662-1.sh

./gsp662-1.sh
# NOTE : Check All Score Upto Task 6
# Run again the following Commands in CloudShell
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Hosting%20a%20Web%20App%20on%20Google%20Cloud%20Using%20Compute%20Engine/gsp662-2.sh

sudo chmod +x gsp662-2.sh

./gsp662-2.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "61",
      "badgeName": "The Basics of Google Cloud Compute: Challenge Lab",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `export ZONE=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Hosting%20a%20Web%20App%20on%20Google%20Cloud%20Using%20Compute%20Engine/gsp662-1.sh

sudo chmod +x gsp662-1.sh

./gsp662-1.sh
# NOTE : Check All Score Upto Task 6
# Run again the following Commands in CloudShell
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Hosting%20a%20Web%20App%20on%20Google%20Cloud%20Using%20Compute%20Engine/gsp662-2.sh

sudo chmod +x gsp662-2.sh

./gsp662-2.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "62",
      "badgeName": "BigQuery: Qwik Start - Console",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/BigQuery%20Qwik%20Start%20-%20Console/gsp072.sh

sudo chmod +x gsp072.sh

./gsp072.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "63",
      "badgeName": "Data Catalog: Qwik Start",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `export LOCATION=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Data%20Catalog%20Qwik%20Start/gsp729.sh

sudo chmod +x gsp729.sh

./gsp729.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "64",
      "badgeName": "BigLake: Qwik Start",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/BigLake%20Qwik%20Start/gsp1040.sh

sudo chmod +x gsp1040.sh

./gsp1040.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "65",
      "badgeName": "Tag and Discover BigLake Data: Challenge Lab",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `export REGION=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Tag%20and%20Discover%20BigLake%20Data%20Challenge%20Lab/arc123.sh

sudo chmod +x arc123.sh

./arc123.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "66",
      "badgeName": "Pub/Sub: Qwik Start - Command Line",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/PubSub%20Qwik%20Start%20-%20Command%20Line/gsp095.sh

sudo chmod +x gsp095.sh

./gsp095.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "67",
      "badgeName": "Cloud Functions 2nd Gen: Qwik Start",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Cloud%20Functions%202nd%20Gen%20Qwik%20Start/gsp1089-1.sh

sudo chmod +x gsp1089-1.sh

./gsp1089-1.sh
# Now Check The Score Upto Task 6 then Process Next
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Cloud%20Functions%202nd%20Gen%20Qwik%20Start/gsp1089-2.sh

sudo chmod +x gsp1089-2.sh

./gsp1089-2.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "68",
      "badgeName": "Eventarc for Cloud Run",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `export REGION=
curl -LO https://github.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/raw/main/Eventarc%20for%20Cloud%20Run/gsp773.sh

sudo chmod +x gsp773.sh

./gsp773.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "69",
      "badgeName": "Get Started with Eventarc: Challenge Lab",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `export LOCATION=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Get%20Started%20with%20Eventarc%20Challenge%20Lab/arc118.sh

sudo chmod +x arc118.sh

./arc118.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "70",
      "badgeName": "Cloud Natural Language API: Qwik Start",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `# Run the following Commands in SSH
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Cloud%20Natural%20Language%20API%20Qwik%20Start/gsp097.sh

sudo chmod +x gsp097.sh

./gsp097.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "71",
      "badgeName": "Speech-to-Text API: Qwik Start",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `export API_KEY=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Google%20Cloud%20Speech-to-Text%20API%20Qwik%20Start/gsp119.sh

sudo chmod +x gsp119.sh

./gsp119.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "72",
      "badgeName": "Entity and Sentiment Analysis with the Natural Language API ",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `export ZONE=
# Go to VM instances from here
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Entity%20and%20Sentiment%20Analysis%20with%20the%20Natural%20Language%20API/gsp038.sh

sudo chmod +x gsp038.sh

./gsp038.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "73",
      "badgeName": "Analyze Speech & Language with Google APIs: Challenge Lab",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `export API_KEY=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Analyze%20Speech%20%26%20Language%20with%20Google%20APIs%20Challenge%20Lab/arc114.sh

sudo chmod +x arc114.sh

./arc114.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "74",
      "badgeName": "VPC Networking Fundamentals",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `export ZONE_2=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/VPC%20Networking%20Fundamentals/gsp210.sh

sudo chmod +x gsp210.sh

./gsp210.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "75",
      "badgeName": "Set Up Network and Application Load Balancers",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `export ZONE=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Set%20Up%20Network%20and%20HTTP%20Load%20Balancers/gsp007.sh

sudo chmod +x gsp007.sh

./gsp007.sh`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "76",
      "badgeName": "Internal Load Balancer",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `export ZONE=
export STATIC_IP=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Internal%20Load%20Balancer/gsp041.sh

sudo chmod +x gsp041.sh

./gsp041.sh
`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
    },
    {
      "id": "77",
      "badgeName": "Networking Fundamentals on Google Cloud: Challenge Lab",
      "solution": "https://www.youtube.com/watch?v=NzRcltfHzu0",
      "difficulty": "Easy",
      "code": `export ZONE=
curl -LO raw.githubusercontent.com/QUICK-GCP-LAB/2-Minutes-Labs-Solutions/main/Networking%20Fundamentals%20on%20Google%20Cloud%20Challenge%20Lab/arc124.sh

sudo chmod +x arc124.sh

./arc124.sh
`,
      
    
      addedBy: "Techcps",
      dateAdded: "2024-12-08"
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