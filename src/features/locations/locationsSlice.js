import { createSlice } from '@reduxjs/toolkit';

function loadStateFromStorage() {
  try {
    const savedLocations = localStorage.getItem('savedLocations');
    if (!savedLocations) return [];

    console.log(JSON.parse(savedLocations));
    return JSON.parse(savedLocations);
  } catch (err) {
    // throw new Error('Could not load savedLocations');
    return [];
  }
}

const initialState = {
  isEditting: false,
  savedLocations: loadStateFromStorage() || [],
};

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    addLocation(state, action) {
      console.log(action.payload);
      const isAdded = state.savedLocations.find(
        location => location.id === action.payload.id,
      );
      if (isAdded) return;
      else state.savedLocations = [...state.savedLocations, action.payload];
    },
    removeLocation(state, action) {
      state.savedLocations = state.savedLocations.filter(
        location => location.id !== action.payload,
      );
    },
    setLocationEditting(state, action) {
      state.isEditting = action.payload;
    },
  },
});

export const { addLocation, removeLocation, setLocationEditting } =
  locationsSlice.actions;
export default locationsSlice.reducer;

export const getLocations = state => state.locations;
