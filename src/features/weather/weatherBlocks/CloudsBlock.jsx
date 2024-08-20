import { useSelector } from 'react-redux';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';
import WeatherBlock from './WeatherBlock';
import { WiCloud, WiCloudy } from 'react-icons/wi';

function CloudsBlock() {
  const clouds = useSelector(state => state.weather.weatherData.current.clouds);
  console.log(clouds);

  return (
    <WeatherBlock>
      <WeatherBlockHeader className='flex items-center'>
        <WiCloudy className='text-2xl' />
        <p>Clouds</p>
      </WeatherBlockHeader>

      <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold'>
        <span className='mr-0.5'>{clouds}</span>%
      </p>
    </WeatherBlock>
  );
}

export default CloudsBlock;
