import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { getWeather, getWeatherMap } from '../../services/apiWeather';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async function ({ lon, lat, place }) {
    const position = { lon, lat };
    // 1) We get the user's geolocation position
    // const positionObj = await getPosition();
    // const position = {
    //   latitude: positionObj.coords.latitude,
    //   longitude: positionObj.coords.longitude,
    // };
    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const weatherData = await getWeather(position);
    // const weatherMap = await getWeatherMap(position, 'precipitation_new', 6);
    // 3) Then we return an object with the data that we are interested in
    return { position, weatherData, place };
  },
);

const initialState = {
  dataTime: null,
  weatherData: {
    hourly: [],
    daily: [],
  },
  error: '',
  status: 'idle',
  isData: false,
  location: { place: '', position: {} },
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchWeather.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.dataTime = new Date().toISOString();
        state.weatherData = action.payload.weatherData;
        state.status = 'idle';
        state.isData = true;
        state.location.position = action.payload.position;
        state.location.place = action.payload.place;
      })
      .addCase(fetchWeather.rejected, state => {
        state.status = 'error';
        state.error =
          'There was a problem getting your address. Make sure to fill this field';
      }),
});

export default weatherSlice.reducer;

// export const {} = weatherSlice.actions;

export const getCurrentWeather = state => state.weather.weatherData.current;

export const getTemperature = state => state.weather.weatherData.current.temp;
export const getTodayPrediction = state => state.weather.weatherData.daily[0];
export const getDailyData = state => state.weather.weatherData.daily;
export const getHourlyData = state => state.weather.weatherData.hourly;
export const getPosition = state => state.weather.location.position;

//! the need of implementing createSelector
export const getHourlyPrediction = createSelector(
  [getDailyData, getHourlyData],
  (daily, hourly) => {
    const hours = hourly.slice(0, 24);
    const firstHour = hours[0].dt;
    const lastHour = hours[hours.length - 1].dt;
    const arr = [
      ...hours,
      ...daily
        .slice(0, 2)
        .flatMap(day => [
          { dt: day.sunrise, type: 'sunrise' },
          { dt: day.sunset, type: 'sunset' },
        ])
        .filter(sun => sun.dt >= firstHour && sun.dt <= lastHour),
    ].sort((a, b) => a.dt - b.dt);
    return arr;
  },
);

export const getTodayPredictionTemp = state =>
  state.weather.weatherData.daily[0].temp;
export const getTodayPredictionFeelsLike = state =>
  state.weather.weatherData.daily[0].feels_like;
export const getLocationName = state => state.weather.location.place;
