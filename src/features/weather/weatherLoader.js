import { searchLocationById } from '../../services/apiGeocoding.js';
import store from '../../store';
import { fetchWeather } from './weatherSlice';

export async function loader({ params }) {
  const location = await searchLocationById(params.locationId);

  store.dispatch(
    fetchWeather({
      position: {
        lon: location.center[0],
        lat: location.center[1],
      },
      placeName: location.place_name,
      id: location.id,
    }),
  );

  return null;
}
