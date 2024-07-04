import { useEffect } from 'react';
import { getWeather } from '../services/apiWeather';
import { SearchCityByName } from '../services/apiGeocoding';

function AppStart() {
  return <div className='text-red-500'>Start screen</div>;
}

export default AppStart;
