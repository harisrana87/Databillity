import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  data: [], 
  loading: 'idle', 
  error: null,
};

// Async thunk to fetch feed data from the API
export const fetchFeedData = createAsyncThunk(
  'feed/fetchFeedData',
  async () => {
    const response = await fetch('https://xvufjkvibh.execute-api.us-east-1.amazonaws.com/api/customers', {
        method: 'GET',
        headers: {
          'accept': 'application/json, text/plain, */*',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          'access-control-allow-credentials': 'true',
          'origin': 'https://app.stg.databillity.com', // updated origin
          'priority': 'u=1, i',
          'referer': 'https://app.stg.databillity.com/', // updated referer
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'x-api-key': 'X97c1sUayGBCfivJgWYO6mvvWkmdtpl6IbVDOGlh'
        }
      });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
);

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
        state.data = action.payload; // Use 'data' here as per your initial state
      })
      .addCase(fetchFeedData.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export default feedSlice.reducer;
// export { fetchFeedData };
