import { createSlice } from '@reduxjs/toolkit';
import { fetchFeedData } from '../../Actions/Feed/feedActions';


const initialState = {
  data: [], 
  loading: 'idle', 
  error: null,
};

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeedData.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchFeedData.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.data = action.payload; 
      })
      .addCase(fetchFeedData.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export default feedSlice.reducer;
