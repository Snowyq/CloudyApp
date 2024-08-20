import { Wind } from '@phosphor-icons/react/dist/ssr';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';
import WeatherBlock from './WeatherBlock';
import { useSelector } from 'react-redux';
import { getCurrentWeather } from '../weatherSlice';
import WindDirection from '../../../ui/WindDirection';
import { convertMsToKmh } from '../../../utils/helpers';

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
          <div className='flex w-full flex-col items-center justify-center sm:flex sm:flex-row sm:items-end sm:justify-start'>
            <span className='hidden sm:block sm:text-sm'>wind speed</span>
            <span className='mr-0.5 text-xl font-semibold text-neutral-200 sm:mx-1'>
              {parseFloat(convertMsToKmh(windSpeed).toFixed(1))}
            </span>
            <span className='-mt-1 text-xs sm:mt-0 sm:text-sm'>km/h</span>
          </div>
          {windGust ||
            (windGust === 0 && (
              <div className='hidden w-full sm:flex sm:items-end sm:justify-start'>
                <span className='hidden sm:block sm:text-sm'>wind gust</span>
                <div>
                  <span className='mr-0.5 text-xl font-semibold text-neutral-200 sm:mx-1'>
                    {parseFloat(convertMsToKmh(windGust).toFixed(1))}
                  </span>
                  <span className='-mt-1 text-xs sm:mt-0 sm:text-sm'>km/h</span>
                </div>
              </div>
            ))}
        </div>
        <div className='mt-1 flex scale-[1.1] items-center justify-center sm:mt-0 sm:scale-[1.15]'>
          <WindDirection windDeg={windDeg} />
        </div>
      </div>
    </WeatherBlock>
  );
}

export default WindBlock;
