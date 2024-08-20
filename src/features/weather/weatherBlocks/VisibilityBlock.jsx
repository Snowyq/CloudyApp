import WeatherBlock from './WeatherBlock';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';
import { useSelector } from 'react-redux';
import { MdVisibility } from 'react-icons/md';

function VisibilityBlock() {
  const visibility = useSelector(
    state => state.weather.weatherData.current.visibility,
  );
  console.log(visibility);
  return (
    <WeatherBlock>
      <WeatherBlockHeader className='flex items-center gap-1'>
        <MdVisibility />
        <p>visibility</p>
      </WeatherBlockHeader>
      <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <span className='mr-0.5 text-2xl font-semibold'>
          {visibility / 1000}
        </span>
        km
      </p>
    </WeatherBlock>
  );
}

export default VisibilityBlock;
