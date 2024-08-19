import { Wind } from '@phosphor-icons/react/dist/ssr';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';
import WeatherBlock from './WeatherBlock';
import { useSelector } from 'react-redux';
import { getCurrentWeather } from '../weatherSlice';
import WindDirection from '../../../ui/WindDirection';

function WindBlock() {
  const currentWeatherData = useSelector(getCurrentWeather);
  const {
    wind_speed: windSpeed,
    wind_deg: windDeg,
    wind_gust: windGust,
  } = currentWeatherData;

  console.log(windSpeed);

  return (
    <WeatherBlock className='flex flex-col items-center sm:col-span-2'>
      <WeatherBlockHeader className='items-center gap-1'>
        <Wind />
        <p>wind</p>
      </WeatherBlockHeader>
      <WindDirection windDeg={windDeg} />
    </WeatherBlock>
  );
}

export default WindBlock;
