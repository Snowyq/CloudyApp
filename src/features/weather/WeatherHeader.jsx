import { WiCloudy, WiThermometer } from 'react-icons/wi';
import { FiPlusCircle } from 'react-icons/fi';

import { useSelector } from 'react-redux';
import {
  getCurrentWeather,
  getLocationName,
  getTodayPredictionTemp,
} from './weatherSlice';
import ValueDisplay from '../../ui/ValueDisplay';
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
    <div className='mb-0 mt-20 flex flex-col items-center justify-center gap-2 py-10'>
      <div className='relative'>
        <p className='text-5xl text-neutral-300'>
          {locationName.split(',')[0]}
        </p>
        {/* <div className='absolute left-full top-1/2 ml-2 -translate-y-1/2'>
          <FiPlusCircle className='text-2xl text-neutral-500' />
        </div> */}
      </div>

      <div className='flex items-center justify-center gap-4'>
        <WeatherIcon
          iconId={weather.icon}
          className='m-0 mt-2 h-[120px] w-[120px] p-0 text-neutral-300'
        />

        <div className='flex flex-col items-start justify-center'>
          <p className='text-lg leading-normal text-neutral-400'>
            {weather.description}
          </p>
          <div className='relatived -ml-1 flex items-center justify-center'>
            {/* <WiThermometer className='text-4xl' /> */}
            <ValueDisplay value={temp} size='5xl' font='semibold' />
          </div>
          <div className='mt-1 flex w-full items-center justify-start gap-1'>
            <ValueDisplay
              value={tempPrediciton.min}
              size='sm'
              textBefore='from'
              className='leading-normal'
              valueColor='neutral-300'
            />
            <ValueDisplay
              value={tempPrediciton.max}
              size='sm'
              textBefore='to'
              className='leading-normal'
              valueColor='neutral-300'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherHeader;
