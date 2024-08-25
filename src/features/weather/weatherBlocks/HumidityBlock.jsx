import { WiHumidity } from 'react-icons/wi';
import WeatherBlock from './WeatherBlock';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';
import { useSelector } from 'react-redux';
import ValueDisplay from '../../../ui/ValueDisplay';
import AbsoluteCenter from '../../../ui/AbsoluteCenter';

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
        <WiHumidity className='text-lg' />
        <p>humidity</p>
      </WeatherBlockHeader>
      <AbsoluteCenter>
        {/* <p className='text-2xl font-semibold'>
          <span className='mr-0.5'>{humidity}</span>%
        </p> */}
        <ValueDisplay
          value={humidity}
          unit='%'
          type='primary'
          valueUnitSpace='0.5'
        />
      </AbsoluteCenter>
      <div className='text-md flex items-center leading-4 semi-sm:items-end semi-sm:leading-normal md:text-lg'>
        <p className='semi-sm:mr-1'>Dew point</p>
        <ValueDisplay
          value={dewPoint}
          size='[1em]'
          valueColor='neutral-100'
          valueFont='semibold'
          className='text-nowrap'
        />
      </div>
      {/* <p className='text-sm leading-none text-neutral-300'>
        Dew point: {dewPoint}°
      </p> */}
    </WeatherBlock>
  );
}

export default HumidityBlock;
