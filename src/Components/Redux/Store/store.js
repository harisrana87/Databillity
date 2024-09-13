import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../Reducer/Dashboard/dashboardReducer';
import authReducer from '../Reducer/Auth/authReducer';
import feedReducer from '../Reducer/Feed/feedReducer';

const store = configureStore({
  reducer: {

    dashboard: dashboardReducer,
   
    feed: feedReducer,
    auth: authReducer,
  },
});

export default store;