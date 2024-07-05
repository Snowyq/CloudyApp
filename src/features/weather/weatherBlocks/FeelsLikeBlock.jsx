import { useSelector } from 'react-redux';
import WeatherBlock from './WeatherBlock';
import { getTemperature, getTodayPredictionFeelsLike } from '../weatherSlice';
import { WiDaySunny, WiNightClear, WiThermometer } from 'react-icons/wi';

function FeelsLikeBlock() {
  const temp = useSelector(getTemperature);
  const feelsLike = useSelector(getTodayPredictionFeelsLike);
  console.log(feelsLike);
  if (!temp) return null;

  return (
    <WeatherBlock className='col-span-1 flex flex-col gap-4 text-neutral-300'>
      <div className='-ml-2 flex'>
        <WiThermometer className='text-2xl' />
        <p>feels like</p>
      </div>
      <div className='flex justify-between'>
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
      </div>
    </WeatherBlock>
  );
}

export default FeelsLikeBlock;
