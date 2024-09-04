import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './weatherSlice';
import { useEffect, useRef, useState } from 'react';
import Grid from '../../ui/Grid';
import WeatherHeader from './WeatherHeader';
import WeatherBlock from './weatherBlocks/WeatherBlock';
import FeelsLikeBlock from './weatherBlocks/FeelsLikeBlock';
import PressureBlock from './weatherBlocks/PressureBlock';
import HourlyPredictionBlock from './weatherBlocks/HourlyPredictionBlock';
import Loader from '../../ui/Loader';
import WindBlock from './weatherBlocks/WindBlock';
import HumidityBlock from './weatherBlocks/HumidityBlock';
import CloudsBlock from './weatherBlocks/CloudsBlock';
import VisibilityBlock from './weatherBlocks/VisibilityBlock';
import MapBlock from './weatherBlocks/MapBlock';
import RainBlock from './weatherBlocks/RainBlock';
import UviBlock from './weatherBlocks/UviBlock';
import AlertBlock from './weatherBlocks/AlertBlock';
import DailyPredictionBlock from './weatherBlocks/DailyPredictionBlock';
import WeatherControlPanel from './WeatherControlPanel';

import { clearSavedLocations } from './weatherSlice.js';

function Weather() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, []);
  const status = useSelector(state => state.weather.status);
  const isData = useSelector(state => state.weather.isData);
  const saved = useSelector(state => state.weather.savedLocations);
  console.log(saved);

  const isLoading = status === 'loading';
  if (isLoading) return <p>loading...</p>;
  if (!isData) return <Loader />;
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
        <RainBlock />
        <UviBlock />
      </Grid>
    </div>
  );

  // return (
  //   <div
  //     className='semi-sm:grid-cols-3 grid grid-flow-dense auto-rows-[10rem] grid-cols-2 justify-center gap-2 p-5 transition-all duration-1000 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7'
  //   >
  //     {isLoading ? <p>loading...</p> : <GeneralWeatherBlock />}
  //   </div>
  // );
}

export async function loader() {
  // const { weatherData } = dispatch(fetchWeather());
  // console.log(weatherData);
  return null;
}

export default Weather;
