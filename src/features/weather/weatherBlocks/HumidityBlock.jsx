import { WiHumidity } from 'react-icons/wi';
import WeatherBlock from './WeatherBlock';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';
import { useSelector } from 'react-redux';

function HumidityBlock() {
  const humidity = useSelector(
    state => state.weather.weatherData.current.humidity,
  );
  const dewPoint = useSelector(
    state => state.weather.weatherData.current.dew_point,
  );

  return (
    <WeatherBlock className='relative flex flex-col justify-between'>
      <WeatherBlockHeader className='flex items-center'>
        <WiHumidity className='text-xl' />
        <p>humidity</p>
      </WeatherBlockHeader>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <p className='text-2xl font-semibold'>
          <span className='mr-0.5'>{humidity}</span>%
        </p>
      </div>
      <p className='text-sm leading-none text-neutral-300'>
        Dew point: {dewPoint}°
      </p>
    </WeatherBlock>
  );
}

export default HumidityBlock;
