import { WEATHER_API_KEY } from '../config';
const API_URL = 'https://api.openweathermap.org';
const API_KEY = `&appid=${WEATHER_API_KEY}`;

export async function getWeather(pos) {
  try {
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

