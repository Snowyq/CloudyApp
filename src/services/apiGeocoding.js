import { GEOLOCATION_API_KEY } from '../config';
const API_URL = ' https://api.maptiler.com/geocoding';
const API_KEY = GEOLOCATION_API_KEY;
export async function SearchCityByName(query, signal) {
  try {
    const url = new URL(`${API_URL}/${query}.json`);
    url.searchParams.append('key', API_KEY);
    url.searchParams.append('language', [ 'en']);
    const res = await fetch(url, {
      signal: signal,
    });
    const data = await res.json();
    return { results: data.features };
  } catch (err) {
    if (err.name !== 'AbortError') throw new Error(err.message);
    if (err.name === 'AbortError') throw new Error();
  }
}

export async function searchLocationById(id) {
  try {
    const url = new URL(`${API_URL}/${id}.json`);
    url.searchParams.append('key', API_KEY);
    url.searchParams.append('language', [ 'en']);
    const res = await fetch(url);
    const data = await res.json();
    const location = data.features[0];

    return location;
  } catch (err) {
    throw new Error(err.message);
  }
}
