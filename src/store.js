import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from './features/locations/locationsSlice.js';
import searchReducer from './features/search/searchSlice.js';
import sidebarReducer from './features/sidebar/sidebarSlice.js';
import weatherReducer from './features/weather/weatherSlice.js';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    weather: weatherReducer,
    search: searchReducer,
    locations: locationsReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  const savedLocations = state.locations.savedLocations;
  localStorage.setItem('savedLocations', JSON.stringify(savedLocations));
});

export default store;
