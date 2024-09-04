import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  customerDetails: {
    name: '',
    email: '',
    phone: '',
    checkin_time: '',
  },
  personaDetails: {
    PrimaryPersona: '',
    SecondaryPersona: '',
  },
  preferenceDetails: {
    Preference1: '',
    Preference2: '',
    Preference3: '',
  },
  status: 'idle',
  error: null,
};

// Async thunk to fetch data from the API
const fetchDashboardData = createAsyncThunk(
  'dashboard/fetchDashboardData',
  async (customerId) => {
    console.log("id from reducer",customerId);
    const defaultId="3c9b1d61-2f3d-4248-b834-b5f288c7b775";
    
    const response = await fetch(`https://xvufjkvibh.execute-api.us-east-1.amazonaws.com/api/dashboard/${customerId? customerId:defaultId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Origin': 'https://app.stg.databillity.com',
        'X-Api-Key': 'X97c1sUayGBCfivJgWYO6mvvWkmdtpl6IbVDOGlh',
      },
    });
    console.log("stored data in reducer:",initialState);
    
    if (!response.ok) {
      throw new Error('Failed to fetch dashboard data');
    }
    return response.json();
  }
);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Update state with API response data
        state.customerDetails = action.payload.customerDetails || state.customerDetails;
        state.personaDetails = action.payload.personaDetails || state.personaDetails;
        state.preferenceDetails = action.payload.preferenceDetails || state.preferenceDetails;
        state.checkin_time = action.payload.checkin_time || state.customerDetails.checkin_time;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch dashboard data';
      });
  },
});

export default dashboardSlice.reducer;
export { fetchDashboardData };
