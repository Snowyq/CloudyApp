import { WEATHER_API_KEY } from '../config';
const API_URL = 'http://api.openweathermap.org/geo/1.0/direct';
const API_KEY = `&appid=${WEATHER_API_KEY}`;

export async function SearchCityByName(cityName) {
  try {
    const res = await fetch(`${API_URL}q=${cityName}&limit=5${API_KEY}`);
    const data = await res.json();
    console.log(data);
    return data[0];
  } catch (err) {
    throw new Error(err.message);
  }
}
