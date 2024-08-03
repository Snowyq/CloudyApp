// import { WEATHER_API_KEY } from '../config';
// const API_URL = 'http://api.openweathermap.org/geo/1.0/direct?';
// const API_KEY = WEATHER_API_KEY;

// export async function SearchCityByName(query) {
//   try {
//     const res = await fetch(`${API_URL}q=${query}&limit=5&appid=${API_KEY}`);
//     const data = await res.json();
//     return data;
//   } catch (err) {
//     throw new Error(err.message);
//   }

import { GEOLOCATION_API_KEY } from '../config';
const API_URL = ' https://api.maptiler.com/geocoding';
const API_KEY = GEOLOCATION_API_KEY;
export async function SearchCityByName(query, signal) {
  try {
    const res = await fetch(`${API_URL}/${query}.json?key=${API_KEY}`, {
      signal: signal,
    });
    const data = await res.json();
    return { results: data.features };
  } catch (err) {
    if (err.name !== 'AbortError') throw new Error(err.message);
    if (err.name === 'AbortError') throw new Error();
  }
}
