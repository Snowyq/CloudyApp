import { WiCloudy, WiThermometer } from 'react-icons/wi';
import { useSelector } from 'react-redux';
import {
  getCurrentWeather,
  getLocationName,
  getTodayPredictionTemp,
} from './weatherSlice';
import Temperature from '../../ui/Temperature';
import WeatherIcon from '../../ui/WeatherIcon';

function WeatherHeader() {
  const currentWeather = useSelector(getCurrentWeather);
  const tempPrediciton = useSelector(getTodayPredictionTemp);
  const locationName = useSelector(getLocationName);
  if (!currentWeather) return null;
  const {
    weather: [weather],
    temp,
  } = currentWeather;

  return (
    <div className='flex items-center justify-center gap-10 py-10'>
      <div className='flex flex-col items-center gap-2'>
        <div>
          <p className='text-3xl text-neutral-300'>
            {locationName.split(',')[0]}
          </p>
        </div>
        <div className='relative flex items-center justify-center'>
          <WiThermometer className='mr-2 text-2xl text-neutral-400' />
          <Temperature value={temp} size='4xl' font='semibold' />
        </div>
        <p className='flex w-full items-center gap-1 text-neutral-400'>
          <span>from</span>
          <Temperature value={tempPrediciton.min} size='sm' />
          <span>to</span>
          <Temperature value={tempPrediciton.max} size='sm' />
        </p>
      </div>
      <div className='relative -mt-5 flex flex-col items-center justify-center'>
        <WeatherIcon
          iconId={weather.icon}
          className='m-0 h-[120px] w-[120px] p-0 text-neutral-300'
        />
        <p className='text-nowrap bg-neutral-600 text-neutral-300'>
          {weather.description}
        </p>
      </div>
    </div>
  );
}

export default WeatherHeader;
