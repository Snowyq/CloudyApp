import { useSelector } from 'react-redux';
import WeatherBlock from './WeatherBlock';
import { getWeatherCurrFeels, getWeatherCurrTemp } from '../weatherSlice';
import { WiThermometer } from 'react-icons/wi';
import ValueDisplay from '../../../ui/ValueDisplay';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';

function FeelsLikeBlock() {
  const temp = useSelector(getWeatherCurrTemp);
  const feelsLike = useSelector(getWeatherCurrFeels);
  if (!temp || !feelsLike) return null;

  return (
    <WeatherBlock className='relative col-span-1 flex flex-col items-center text-neutral-300'>
      <WeatherBlockHeader className='flex items-center'>
        <WiThermometer className='text-lg' />
        <p>feels like</p>
      </WeatherBlockHeader>
      <div className='absolute top-1/2 -translate-y-1/2'>
        <ValueDisplay value={feelsLike} type='primary' />
      </div>
    </WeatherBlock>
  );
}

export default FeelsLikeBlock;
