import WeatherBlock from './WeatherBlock';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';
import { useSelector } from 'react-redux';
import { MdVisibility } from 'react-icons/md';
import ValueDisplay from '../../../ui/ValueDisplay';

function VisibilityBlock() {
  const visibility = useSelector(
    state => state.weather.weatherData.current.visibility,
  );
  const visibilityInKm = visibility / 1000;
  console.log(visibility);
  return (
    <WeatherBlock>
      <WeatherBlockHeader className='flex items-center gap-1'>
        <MdVisibility />
        <p>visibility</p>
      </WeatherBlockHeader>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <ValueDisplay
          value={visibilityInKm}
          unit='km'
          valueUnitSpace='1'
          unitAlign='end'
          size='2xl'
          unitSize='sm'
        />
      </div>
    </WeatherBlock>
  );
}

export default VisibilityBlock;
