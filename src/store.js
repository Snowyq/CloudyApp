import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './features/sidebar/sidebarSlice.js';
import weatherReducer from './features/weather/weatherSlice.js';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    weather: weatherReducer,
  },
});

export default store;
