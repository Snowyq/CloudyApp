import { WEATHER_API_KEY } from '../config';
const API_URL = 'http://api.openweathermap.org/geo/1.0/direct?';
const API_KEY = WEATHER_API_KEY;

export async function SearchCityByName(query) {
  try {
    const res = await fetch(`${API_URL}q=${query}&limit=5&appid=${API_KEY}`);
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
// const API_URL =
//   'https://maps.googleapis.com/maps/api/geocode/json?address=los+angeles&key=YOUR_API_KEY';
// const API_KEY = '';

// export async function SearchCityByName(query) {
//   try {
//     const res = await fetch(`${API_URL}q=${query}&limit=5&appid=${API_KEY}`);
//     const data = await res.json();
//     return data;
//   } catch (err) {
//     throw new Error(err.message);
//   }
// }
