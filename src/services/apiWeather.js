import { WEATHER_API_KEY } from '../config';
import fakeWeather from './fakeWeather';
const API_URL = 'https://api.openweathermap.org/data/3.0/onecall';
const API_KEY = `&appid=${WEATHER_API_KEY}`;

export async function getWeather(pos) {
  try {
    // const position = `?lat=${pos.lat}&lon=${pos.lon}`;
    const position = `?lat=${50}&lon=${19}`;
    const res = await fetch(`${API_URL}${position}&units=metric${API_KEY}`);
    const data = await res.json();
    console.log(data);
    return data;
    // console.log(fakeWeather);
    // return fakeWeather;
  } catch (err) {
    throw new Error(err.message);
  }
}
