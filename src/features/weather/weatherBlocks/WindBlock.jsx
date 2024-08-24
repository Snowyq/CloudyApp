import { Wind } from '@phosphor-icons/react/dist/ssr';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';
import WeatherBlock from './WeatherBlock';
import { useSelector } from 'react-redux';
import { getCurrentWeather } from '../weatherSlice';
import WindDirection from '../../../ui/WindDirection';
import { convertMsToKmh } from '../../../utils/helpers';
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
      <div>
        <WeatherBlockHeader className='items-center gap-1'>
          <Wind />
          <p>wind</p>
        </WeatherBlockHeader>
      </div>
      <div className='relative mx-2 mt-2 sm:flex sm:items-center sm:justify-between'>
        <div className='absolute left-1/2 top-1/2 z-[100] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-neutral-400 sm:static sm:translate-x-0 sm:translate-y-0 sm:items-start sm:gap-2'>
          <ValueDisplay
            value={windSpeed}
            unit='km/h'
            textBefore='wind speed'
            size='lg'
            font='semibold'
            unitAlign='end'
            valueUnitSpace='1'
          />
          {!isNaN(windGust) && (
            <ValueDisplay
              value={windGust}
              unit='km/h'
              textBefore='wind gust'
              size='lg'
              font='semibold'
              unitAlign='end'
              valueUnitSpace='1'
            />
          )}
        </div>
        <div className='mt-1 flex scale-[1.1] items-center justify-center sm:mt-0 sm:scale-[1.15]'>
          <WindDirection windDeg={windDeg} />
        </div>
      </div>
    </WeatherBlock>
  );
}

export default WindBlock;
