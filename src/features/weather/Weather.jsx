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

function Weather() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, []);
  const status = useSelector(state => state.weather.status);
  const isData = useSelector(state => state.weather.isData);
  const isLoading = status === 'loading';
  if (isLoading) return <p>loading...</p>;
  if (!isData) return <Loader />;
  return (
    <div className='flex h-[calc(100svh-100px)] flex-col items-center overflow-scroll px-5'>
      <WeatherHeader />
      <Grid className='w-full grid-flow-dense auto-rows-[150px] grid-cols-weather justify-center gap-3'>
        <HourlyPredictionBlock />
        <FeelsLikeBlock />
        <PressureBlock />
        <WindBlock />
        <WeatherBlock />
        <WeatherBlock />
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
