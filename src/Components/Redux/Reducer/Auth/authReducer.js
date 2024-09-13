import { createSlice } from '@reduxjs/toolkit';
import { login } from '../../Actions/Auth/authActions';

const initialState = {
  userId: null,
  idToken: null,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.userId = null;
      state.idToken = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.userId;
        state.token = action.payload.idToken; 
      });
    //   .addCase(login.rejected, (state, action) => {
    //     state.status = 'failed';
    //     state.error = action.error.message;
    //   });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
