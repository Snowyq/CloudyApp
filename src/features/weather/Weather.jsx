import { getWeather } from '../../services/apiWeather';
import GeneralWeatherBlock from './weatherBlocks/GeneralWeatherBlock';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './weatherSlice';
import { useEffect, useRef, useState } from 'react';
import Grid from '../../ui/Grid';
import WeatherHeader from './WeatherHeader';
import WeatherBlock from './weatherBlocks/WeatherBlock';

function Weather() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, []);
  const status = useSelector(state => state.weather.status);
  const isLoading = status === 'loading';
  if (isLoading) return <p>loading...</p>;

  return (
    <div className='flex flex-col items-center px-5'>
      <WeatherHeader />
      <Grid className='w-full grid-flow-dense auto-rows-[150px] grid-cols-weather justify-center gap-3'>
        <GeneralWeatherBlock />
        <WeatherBlock />
        <WeatherBlock className='col-span-2' />
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
