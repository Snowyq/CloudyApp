import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SearchCityByName } from '../../services/apiGeocoding';

const initialState = {
  status: 'idle',
  error: '',
  query: '',
  results: null,
  showResults: false,
};

let aborter = null;
export const fetchResults = createAsyncThunk(
  'search/fetchResults',
  async function (query) {
    if (aborter) {
      aborter.abort();
    }
    aborter = new AbortController();
    const signal = aborter.signal;

    const { results } = await SearchCityByName(query, signal);
    return { results, query };
  },
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    hideResults(state) {
      state.showResults = false;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchResults.pending, state => {
        state.status = 'loading';
        state.results = null;
      })
      .addCase(fetchResults.fulfilled, (state, action) => {
        state.results = action.payload.results;
        state.query = action.payload.query;
        state.showResults = true;
        state.status = 'idle';
        state.isData = true;
      })
      .addCase(fetchResults.rejected, state => {
        state.status = 'error';
        state.error =
          'There was a problem getting your address. Make sure to fill this field';
      }),
});

export const { hideResults } = searchSlice.actions;

export default searchSlice.reducer;
