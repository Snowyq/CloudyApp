import { useSelector } from 'react-redux';
import WeatherBlock from './WeatherBlock';
import { WiBarometer } from 'react-icons/wi';
import PressureBar from '../../../ui/PressureBar';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';
import AbsoluteCenter from '../../../ui/AbsoluteCenter';
import ValueDisplay from '../../../ui/ValueDisplay';

function PressureBlock() {
  const pressure = useSelector(
    state => state.weather.weatherData.current.pressure,
  );

  if (!pressure) return null;

  return (
    <WeatherBlock className='flex flex-col items-center overflow-hidden'>
      <WeatherBlockHeader>
        <WiBarometer className='text-lg' />
        <p>pressure</p>
      </WeatherBlockHeader>
      <AbsoluteCenter className='z-10 text-lg semi-sm:text-2xl'>
        <ValueDisplay
          value={pressure}
          unit=''
          size='[1em]'
          valueFont='normal'
        />
      </AbsoluteCenter>
      <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2'>
        <PressureBar
          value={pressure}
          className='-mt-4 scale-[0.8] semi-sm:-mt-5 semi-sm:scale-[1]'
        />
      </div>
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
