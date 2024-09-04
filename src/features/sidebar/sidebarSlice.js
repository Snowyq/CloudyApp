import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showSidebar: false,
  locationsEdit: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.showSidebar = !state.showSidebar;
      state.locationsEdit = false;
    },
    showSidebar(state) {
      state.showSidebar = true;
      state.locationsEdit = false;
    },
    closeSidebar(state) {
      state.showSidebar = false;
      state.locationsEdit = false;
    },
    toggleLocationsEdit(state) {
      state.locationsEdit = !state.locationsEdit;
    },
    showLocationsEdit(state) {
      state.locationsEdit = true;
    },
    closeLocationsEdit(state) {
      state.locationsEdit = false;
    },
  },
});

export const {
  toggleSidebar,
  toggleLocationsEdit,
  showLocationsEdit,
  showSidebar,
  closeLocationsEdit,
  closeSidebar,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
