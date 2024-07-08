import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './features/sidebar/sidebarSlice.js';
import weatherReducer from './features/weather/weatherSlice.js';
import searchReducer from './features/search/searchSlice.js';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    weather: weatherReducer,
    search: searchReducer,
  },
});

export default store;
