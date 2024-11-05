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
    showResults(state) {
      state.showResults = true;
    },
    removeResults(state) {
      state.results = null;
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

export const { showResults, hideResults, removeResults } = searchSlice.actions;

export default searchSlice.reducer;

// export const fetchWeather = createAsyncThunk(
//   'weather/fetchWeather',
//   async function (position) {
//     // 1) We get the user's geolocation position
//     // const positionObj = await getPosition();
//     // const position = {
//     //   latitude: positionObj.coords.latitude,
//     //   longitude: positionObj.coords.longitude,
//     // };
//     // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
//     console.log(position);
//     const weatherData = await getWeather(position);
//     // 3) Then we return an object with the data that we are interested in
//     return { position, weatherData };
//   },
// );
