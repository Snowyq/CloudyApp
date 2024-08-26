import { useSelector } from 'react-redux';
import WeatherBlock from './WeatherBlock';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';
import AbsoluteCenter from '../../../ui/AbsoluteCenter';
import ValueDisplay from '../../../ui/ValueDisplay';
import UviBar from '../../../ui/UviBar';

function UviBlock() {
  const uvi = useSelector(state => state.weather.weatherData.current.uvi);
  console.log(uvi);
  return (
    <WeatherBlock>
      <WeatherBlockHeader>
        <p>UV Index</p>
      </WeatherBlockHeader>
      <AbsoluteCenter className='flex w-full flex-col items-center justify-center overflow-visible'>
        <ValueDisplay value={uvi} unit='' type='primary' />
        <UviBar value={uvi} width='85%' />
      </AbsoluteCenter>
    </WeatherBlock>
  );
}

export default UviBlock;
