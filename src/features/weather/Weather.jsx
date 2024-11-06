import { useSelector } from 'react-redux';
import {
  fetchWeather,
  getWeatherIsData,
  getWeatherStatus,
} from './weatherSlice';

import Grid from '../../ui/Grid';
import WeatherHeader from './WeatherHeader';

import FeelsLikeBlock from './weatherBlocks/FeelsLikeBlock';
import PressureBlock from './weatherBlocks/PressureBlock';
import HourlyPredictionBlock from './weatherBlocks/HourlyPredictionBlock';
import Loader from '../../ui/Loader';
import WindBlock from './weatherBlocks/WindBlock';
import HumidityBlock from './weatherBlocks/HumidityBlock';
import CloudsBlock from './weatherBlocks/CloudsBlock';
import VisibilityBlock from './weatherBlocks/VisibilityBlock';
import MapBlock from './weatherBlocks/MapBlock';
import UviBlock from './weatherBlocks/UviBlock';
import AlertBlock from './weatherBlocks/AlertBlock';
import DailyPredictionBlock from './weatherBlocks/DailyPredictionBlock';
import WeatherControlPanel from './WeatherControlPanel';

import { searchLocationById } from '../../services/apiGeocoding.js';
import store from '../../store';

function Weather() {
  const status = useSelector(getWeatherStatus);
  const isData = useSelector(getWeatherIsData);
  const isLoading = status === 'loading';
  if (!isData) return null;
  if (isLoading) return <p>loading...</p>;
  return (
    <div className='flex flex-col items-center bg-neutral-800 px-1 semi-sm:px-2 sm:px-3'>
      <WeatherHeader />
      <WeatherControlPanel />
      <Grid className='w-full max-w-[1200px] grid-flow-dense auto-rows-[100px] grid-cols-weather-100 justify-center gap-[0.3rem] pb-10 semi-sm:auto-rows-[120px] semi-sm:grid-cols-weather-120 semi-sm:gap-2 sm:auto-rows-[125px] sm:grid-cols-weather-125 md:auto-rows-[135px] md:grid-cols-weather-135 md:gap-2 lg:auto-rows-[150px] lg:grid-cols-weather-150'>
        <HourlyPredictionBlock />
        <DailyPredictionBlock />
        <AlertBlock />
        <FeelsLikeBlock />
        <PressureBlock />
        <HumidityBlock />
        <WindBlock />
        <CloudsBlock />
        <VisibilityBlock />
        <MapBlock />
        <UviBlock />
      </Grid>
    </div>
  );
}

export async function loader({ params }) {
  console.log(params);
  console.log(params.locationId);
  const location = await searchLocationById(params.locationId);
  console.log(location);

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

export default Weather;
