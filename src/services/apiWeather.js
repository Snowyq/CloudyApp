import { WEATHER_API_KEY } from '../config';
import fakeWeather from './fakeWeather';
const API_URL = 'https://api.openweathermap.org';
const API_MAP_URL = 'https://tile.openweathermap.org';
const API_KEY = `&appid=${WEATHER_API_KEY}`;

export async function getWeather(pos) {
  try {
    // const position = `?lat=${pos.lat}&lon=${pos.lon}`;
    const position = `?lat=${pos.lat}&lon=${pos.lon}`;
    const res = await fetch(
      `${API_URL}/data/3.0/onecall${position}&units=metric${API_KEY}`,
    );
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getWeatherMap(pos, layer, zoomLevel) {
  try {
    const x = Math.floor(pos.lat * zoomLevel);
    const y = Math.floor(pos.lon * zoomLevel);
    console.log(x, y);
    const url = `${API_MAP_URL}/map/${layer}/${0}/${0}/${0}.png?${API_KEY}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
