import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './features/sidebar/sidebarSlice.js';
import weatherReducer from './features/weather/weatherSlice.js';
import searchReducer from './features/search/searchSlice.js';

// function loadStateFromStorage() {
//   try {
//     const savedLocations = localStorage.getItem('savedLocations');
//     if (!savedLocations) return undefined;
//     return JSON.parse(savedLocations);
//   } catch (err) {
//     throw new Error('Could not load savedLocations');
//   }
// }
// const preloadedState = {
//   weather: {
//     savedLocations: loadStateFromStorage() || [],
//   },
// };

// const initialState = {
//   dataTime: null,
//   weatherData: {
//     hourly: [],
//     daily: [],
//   },
//   error: '',
//   status: 'idle',
//   isData: false,
//   location: { placeName: '', position: {}, id: null },
// };

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    weather: weatherReducer,
    search: searchReducer,
  },
  // preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  const savedLocations = state.weather.savedLocations;
  localStorage.setItem('savedLocations', JSON.stringify(savedLocations));
});

export default store;
