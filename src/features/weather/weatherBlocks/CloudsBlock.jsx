import { useSelector } from 'react-redux';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';
import WeatherBlock from './WeatherBlock';
import { WiCloud, WiCloudy } from 'react-icons/wi';
import ValueDisplay from '../../../ui/ValueDisplay';

function CloudsBlock() {
  const clouds = useSelector(state => state.weather.weatherData.current.clouds);
  return (
    <WeatherBlock>
      <WeatherBlockHeader className='flex items-center'>
        <WiCloudy className='text-2xl' />
        <p>Clouds</p>
      </WeatherBlockHeader>

      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl'>
        <ValueDisplay
          value={clouds}
          unit='%'
          type='primary'
          valueUnitSpace='0.5'
        />
      </div>
    </WeatherBlock>
  );
}

export default CloudsBlock;
