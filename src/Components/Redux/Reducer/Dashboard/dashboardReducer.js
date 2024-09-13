import { createSlice } from '@reduxjs/toolkit';
import { fetchDashboardData } from '../../Actions/Dashboard/dashboardActions';


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
