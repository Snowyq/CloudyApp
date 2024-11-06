import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showSidebar: false,
  locations: {
    isEditting: false,
  },
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.showSidebar = !state.showSidebar;
      state.locations.isEditting = false;
    },
    showSidebar(state) {
      state.showSidebar = true;
      state.locations.isEditting = false;
    },
    closeSidebar(state) {
      state.showSidebar = false;
      state.locations.isEditting = false;
    },
    toggleLocationsEditting(state) {
      state.locations.isEditting = !state.locations.isEditting;
    },
    showLocationsEdit(state) {
      state.locations.isEditting = true;
    },
    closeLocationsEdit(state) {
      state.locations.isEditting = false;
    },
  },
});

// Slice exports
export const {
  toggleSidebar,
  toggleLocationsEdit,
  showLocationsEdit,
  showSidebar,
  closeLocationsEdit,
  closeSidebar,
} = sidebarSlice.actions;
export default sidebarSlice.reducer;

// Selectors exports
export const getShowSidebar = state => state.sidebar.showSidebar;
