import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../Reducer/dashboardReducer';

import feedReducer from '../Reducer/feedReducer';

const store = configureStore({
  reducer: {

    dashboard: dashboardReducer,
   
    feed: feedReducer,
  },
});

export default store;