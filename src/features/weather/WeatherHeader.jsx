import { WiCloudy, WiThermometer } from 'react-icons/wi';
import { useSelector } from 'react-redux';
import { getCurrentWeather, getTodayPredictionTemp } from './weatherSlice';

function WeatherHeader() {
  const currentWeather = useSelector(getCurrentWeather);
  const tempPrediciton = useSelector(getTodayPredictionTemp);
  if (!currentWeather) return null;
  const {
    weather: [weather],
    temp,
  } = currentWeather;

  console.log(weather);
  console.log(temp);

  return (
    <div className='flex items-center justify-center gap-10 py-10'>
      <div className='flex flex-col items-center gap-2'>
        <div>
          <p className='text-3xl text-neutral-300'>Chicago</p>
        </div>
        <div className='relative flex items-center justify-center'>
          <WiThermometer className='mr-2 text-2xl text-neutral-400' />
          <p className='text-4xl font-semibold'>{temp.toFixed(1)}</p>
          <span className='ml-1 self-start text-2xl font-normal text-neutral-400'>
            °C
          </span>
        </div>
        <p className='text-neutral-400'>
          from{' '}
          <span className='text-neutral-300'>
            {tempPrediciton.min.toFixed(1)}°C
          </span>{' '}
          to{' '}
          <span className='text-neutral-300'>
            {tempPrediciton.max.toFixed(1)}°C
          </span>
        </p>
      </div>
      <div className='relative -mt-5 flex flex-col items-center justify-center'>
        <WiCloudy className='m-0 h-[120px] w-[120px] p-0 text-neutral-300' />
        <p className='absolute bottom-1 text-nowrap text-neutral-300'>
          {weather.description}
        </p>
      </div>
    </div>
  );
}

export default WeatherHeader;
