import { createSlice } from '@reduxjs/toolkit';

function loadStateFromStorage() {
  try {
    const savedLocations = localStorage.getItem('savedLocations');
    if (!savedLocations) return [];

    return JSON.parse(savedLocations);
  } catch (err) {
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
