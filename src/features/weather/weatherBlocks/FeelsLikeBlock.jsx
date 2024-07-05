import { useSelector } from 'react-redux';
import WeatherBlock from './WeatherBlock';
import { getTemperature, getTodayPredictionFeelsLike } from '../weatherSlice';
import { WiDaySunny, WiNightClear, WiThermometer } from 'react-icons/wi';
import Temperature from '../../../ui/Temperature';

function FeelsLikeBlock() {
  const temp = useSelector(getTemperature);
  const feelsLike = useSelector(
    state => state.weather.weatherData.current.feels_like,
  );
  if (!temp) return null;

  return (
    <WeatherBlock className='relative col-span-1 flex flex-col gap-4 text-neutral-300'>
      <div className='-ml-2 flex'>
        <WiThermometer className='text-2xl' />
        <p>feels like</p>
      </div>
      <Temperature value={feelsLike} unit='°C' font='semibold' size='2xl' />

      {/* <div className='absolute top-1/2 flex -translate-y-1/2 transform items-center justify-center'>
        <p className='text-3xl text-neutral-100'>{feelsLike}</p>
        <span className='text-md mt-0.5 self-start text-neutral-300'>°C</span>
      </div> */}

      {/* <div className='flex justify-between'>
        <div className='flex flex-col items-center'>
          <p className='text-sm'>day</p>
          <WiDaySunny className='text-4xl' />
          <p className='text-xl text-neutral-100'>
            {feelsLike.day.toFixed(1)}
            <span className='text-sm text-neutral-300'>°C</span>
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-sm'>night</p>
          <WiNightClear className='text-4xl' />
          <p className='text-end text-xl text-neutral-100'>
            {feelsLike.night.toFixed(1)}
            <span className='text-sm text-neutral-300'>°C</span>
          </p>
        </div>
      </div> */}
    </WeatherBlock>
  );
}

export default FeelsLikeBlock;
