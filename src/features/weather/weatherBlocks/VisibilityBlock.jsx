import WeatherBlock from './WeatherBlock';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';
import { useSelector } from 'react-redux';
import { MdVisibility } from 'react-icons/md';
import ValueDisplay from '../../../ui/ValueDisplay';
import AbsoluteCenter from '../../../ui/AbsoluteCenter';
import { getWeatherCurrVisibility } from '../weatherSlice';

function VisibilityBlock() {
  const visibility = useSelector(getWeatherCurrVisibility);
  const visibilityInKm = visibility / 1000;
  return (
    <WeatherBlock>
      <WeatherBlockHeader className='flex items-center gap-1'>
        <MdVisibility />
        <p>visibility</p>
      </WeatherBlockHeader>
      <AbsoluteCenter>
        <ValueDisplay
          value={visibilityInKm}
          unit='km'
          valueUnitSpace='1'
          type='primary'
        />
      </AbsoluteCenter>
    </WeatherBlock>
  );
}

export default VisibilityBlock;
