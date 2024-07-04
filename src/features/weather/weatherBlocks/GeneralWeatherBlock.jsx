import WeatherBlock from './WeatherBlock';
import { getIconUrl } from '../../../utils/helpers';
import { useSelector } from 'react-redux';
import { Cloud } from '@phosphor-icons/react/dist/ssr';
import { Thermometer } from '@phosphor-icons/react';
import { WiCloudy, WiThermometer } from 'react-icons/wi';

function GeneralWeatherBlock() {
  const currentWeather = useSelector(
    state => state.weather.weatherData.current,
  );
  if (!currentWeather) return null;
  const {
    weather: [weather],
    temp,
  } = currentWeather;
  console.log(weather);
  console.log(temp);

  return (
    <WeatherBlock className='col-span-2 flex justify-between gap-5 p-5 text-neutral-200 semi-sm:col-span-2'>
      <div className='flex h-full flex-col justify-center'>
        <WiCloudy className='text-[100px]' />
        <p className='text-center text-sm text-neutral-300'>
          {weather.description}
        </p>
      </div>
      <div className='flex flex-col items-end justify-center pr-5'>
        <p className='text-right text-lg'>Chicago</p>
        <div className='flex items-center'>
          <WiThermometer className='text-[2.5rem]' />
          <p className='text-4xl font-semibold text-neutral-50'>{temp}</p>
        </div>
      </div>
    </WeatherBlock>
  );
}

export default GeneralWeatherBlock;
