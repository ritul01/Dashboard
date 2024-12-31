# Responsive Dashboard with News and Payout Details

# Project Overview
The Responsive Dashboard is a feature-rich web application designed to provide real-time news analytics and payout management. 
It includes user authentication via Google, responsive design, and exportable data functionality.

# Features
- **User Authentication**: Users can log in using their Google account credentials.
- **News Analytics**: Displays real-time news analytics, including news articles, Bar Chart, and keyword.
- **Payout Details**: Allows users to view and manage their payout details.
- **Responsive Design**: The dashboard is fully responsive, ensuring a seamless user experience across various devices.
- **Exportable Data**: Users can export data for further analysis.
- **Error Handling**: Graceful fallback for API errors.

# Technology Used
- **Frontend**: React, Redux, Chart.js, CSS.
- **Authentication**: Firebase Authentication
- **API Integration**: Fetching data from third-party REST APIs (News API)
- **Deployment**: Vercel

# Setup Instructions
1. Clone the Repository
```bash
git clone git@github.com:ritul01/Dashboard.git
```
2. Install Dependencies
```bash
npm install
```
3. Add Environment Variables
- Create a .env file in the root directory:
```makefile
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id
```
- Replace placeholders with your Firebase project configuration.

4. Start the Development Server
```bash
npm run dev
```




# Usage
1. Open the app and log in with Google.
2. Explore news analytics, filter/search articles, and manage payouts.
3. Export data as needed in multiple formats.


### If the deployed link doesn't work then you can see some visuals here
