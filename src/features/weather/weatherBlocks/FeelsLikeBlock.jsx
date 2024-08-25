import { useSelector } from 'react-redux';
import WeatherBlock from './WeatherBlock';
import { getTemperature, getTodayPredictionFeelsLike } from '../weatherSlice';
import { WiDaySunny, WiNightClear, WiThermometer } from 'react-icons/wi';
import ValueDisplay from '../../../ui/ValueDisplay';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';

function FeelsLikeBlock() {
  const temp = useSelector(getTemperature);
  const feelsLike = useSelector(
    state => state.weather.weatherData.current.feels_like,
  );
  if (!temp) return null;

  return (
    <WeatherBlock className='relative col-span-1 flex flex-col items-center text-neutral-300'>
      <WeatherBlockHeader className='flex items-center'>
        <WiThermometer className='text-lg' />
        <p>feels like</p>
      </WeatherBlockHeader>
      <div className='absolute top-1/2 -translate-y-1/2'>
        <ValueDisplay value={feelsLike} type='primary' />
      </div>

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
