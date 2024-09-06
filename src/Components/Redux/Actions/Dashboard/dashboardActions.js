import { createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch data from the API
const fetchDashboardData = createAsyncThunk(
  'dashboard/fetchDashboardData',
  async (customerId) => {
    console.log("id from action", customerId);
    const defaultId = "3c9b1d61-2f3d-4248-b834-b5f288c7b775";
    
    const response = await fetch(`https://xvufjkvibh.execute-api.us-east-1.amazonaws.com/api/dashboard/${customerId ? customerId : defaultId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Origin': 'https://app.stg.databillity.com',
        'X-Api-Key': 'X97c1sUayGBCfivJgWYO6mvvWkmdtpl6IbVDOGlh',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch dashboard data');
    }
    return response.json();
  }
);

export { fetchDashboardData };
