import { useSelector } from 'react-redux';
import WeatherBlock from './WeatherBlock';
import { WiBarometer } from 'react-icons/wi';
import PressureBar from '../../../ui/PressureBar';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';

function PressureBlock() {
  const pressure = useSelector(
    state => state.weather.weatherData.current.pressure,
  );

  if (!pressure) return null;
  console.log(pressure);

  return (
    <WeatherBlock className='flex flex-col items-center gap-4 overflow-hidden'>
      <WeatherBlockHeader>
        <WiBarometer className='text-2xl' />
        <p>pressure</p>
      </WeatherBlockHeader>
      <PressureBar value={pressure} />
    </WeatherBlock>
  );
}

export default PressureBlock;
{
  /* <div className='relative'>
        <div className='relative h-12 w-24 overflow-hidden'>
          <div className='absolute left-0 top-0 h-24 w-24 rounded-full border-8 border-red-500'></div>
        </div>
        <div className='absolute left-1/2 top-4 flex -translate-x-1/2 flex-col items-center'>
          <WiBarometer className='text-4xl' />
          <p className='text-neutral-100'>{pressure}</p>
        </div>
      </div> */
}
