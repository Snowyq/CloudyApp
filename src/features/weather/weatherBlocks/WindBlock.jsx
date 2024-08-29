import { Wind } from '@phosphor-icons/react/dist/ssr';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';
import WeatherBlock from './WeatherBlock';
import { useSelector } from 'react-redux';
import { getCurrentWeather } from '../weatherSlice';
import WindDirection from '../../../ui/WindDirection';
import {
  convertMsToKmh,
  calculatePointsOnCircle,
} from '../../../utils/helpers';
import ValueDisplay from '../../../ui/ValueDisplay';

function WindBlock() {
  const currentWeatherData = useSelector(getCurrentWeather);
  const {
    wind_speed: windSpeed,
    wind_deg: windDeg,
    wind_gust: windGust,
  } = currentWeatherData;

  return (
    <WeatherBlock className='flex flex-col sm:col-span-2'>
      <WeatherBlockHeader className='items-center gap-1'>
        <Wind />
        <p>wind</p>
      </WeatherBlockHeader>

      <div className='absolute left-1/2 top-1/2 mt-2 -translate-x-1/2 -translate-y-1/2 semi-sm:mt-2.5 sm:hidden'>
        <div className='absolute left-1/2 top-1/2 z-[100] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-0'>
          <ValueDisplay
            value={windSpeed}
            unit=''
            valueColor='neutral-100'
            size='lg'
            valueUnitSpace='1'
          />
          <p className='-mt-1.5 text-[0.7rem]'>km/h</p>
        </div>
        <div className='scale-[0.75] semi-sm:scale-[0.95]'>
          <WindDirection windDeg={windDeg} />
        </div>
      </div>
      <div className='hidden sm:flex'>
        <div className='ml-1 flex flex-col gap-2'>
          <div>
            <ValueDisplay
              value={windSpeed}
              unit='km/h'
              unitColor='neutral-400'
              type='primary'
              valueUnitSpace='1'
            />
            <p className='leading-none text-neutral-400'>wind speed</p>
          </div>
          {!isNaN(windGust) && (
            <ValueDisplay
              value={windGust}
              unit='km/h'
              unitColor='neutral-400'
              textBefore='wind gust:'
              size='sm'
              valueUnitSpace='1'
            />
          )}
        </div>
        <div className='absolute right-0 top-1/2 mr-4 -translate-y-1/2'>
          <WindDirection windDeg={windDeg} className='scale-[1.1]' />
        </div>
      </div>
    </WeatherBlock>
  );
}

export default WindBlock;
{
  /*   
<div className='relative -mt-2 flex flex-col items-start justify-start sm:flex sm:items-center sm:justify-between'>
        <div className='absolute left-1/2 top-1/2 z-[100] hidden -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-neutral-400 sm:static sm:flex sm:translate-x-0 sm:translate-y-0 sm:items-start sm:gap-2'>
          <ValueDisplay
            value={windSpeed}
            unit='km/h'
            unitColor='neutral-400'
            valueFont='semibold'
            unitFont='normal'
            textBefore='wind speed:'
            size='md'
            font='semibold'
            valueUnitSpace='1'
          />
          {!isNaN(windGust) && (
            <ValueDisplay
              value={windGust}
              unit='km/h'
              unitColor='neutral-400'
              valueFont='semibold'
              unitFont='normal'
              textBefore='wind gust:'
              size='md'
              font='semibold'
              valueUnitSpace='1'
              className='hidden sm:block'
            />
          )}
        </div>
        <div className='absolute left-1/2 top-1/2 z-[100] -translate-x-1/2 -translate-y-1/2'>
          <ValueDisplay
            value={windSpeed}
            unit=''
            unitColor='neutral-400'
            valueFont='semibold'
            unitFont='normal'
            size='md'
            font='semibold'
            valueUnitSpace='1'
          />
        </div>
        <div className='relative flex scale-[0.75] sm:mt-0 sm:scale-[1.15]'>
          <WindDirection windDeg={windDeg} />
        </div>
      </div> */
}
