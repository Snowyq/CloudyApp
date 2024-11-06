import { useSelector } from 'react-redux';
import WeatherBlock from './WeatherBlock';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';
import AbsoluteCenter from '../../../ui/AbsoluteCenter';
import ValueDisplay from '../../../ui/ValueDisplay';
import UviBar from '../../../ui/UviBar';
import { useEffect, useState } from 'react';
import { getWeatherCurrUvi } from '../weatherSlice';

function UviBlock() {
  const uvi = useSelector(getWeatherCurrUvi);
  const [uviMessage, setUviMessage] = useState('');
  const [dotColor, setDotColor] = useState('neutral-400');

  useEffect(() => {
    switch (true) {
      case uvi < 3:
        setDotColor('bg-green-500');
        setUviMessage('Low');
        break;
      case uvi < 6:
        setDotColor('bg-yellow-500');
        setUviMessage('Moderate');
        break;
      case uvi < 8:
        setDotColor('bg-orange-500');
        setUviMessage('High');
        break;
      case uvi < 11:
        setDotColor('bg-red-500');
        setUviMessage('Very High');
        break;
      case uvi >= 11:
        setDotColor('bg-violet-500');
        setUviMessage('Extreme');
        break;
    }
  }, [uvi, setUviMessage, setDotColor]);

  return (
    <WeatherBlock>
      <WeatherBlockHeader>
        <p>UV Index</p>
      </WeatherBlockHeader>
      <AbsoluteCenter className='mt-2 flex w-full flex-col items-center justify-center gap-1 overflow-visible semi-sm:gap-1.5 md:gap-2'>
        <div className='flex w-[85%] items-center justify-center'>
          <ValueDisplay value={uvi} unit='' type='primary' />
        </div>
        <UviBar
          value={uvi}
          width='85%'
          height='0.5em'
          dotSize='1em'
          className='text-sm semi-sm:text-lg'
          dotColor={dotColor}
        />
        <p className='z-10 text-base text-neutral-300 semi-sm:text-lg'>
          {uviMessage}
        </p>
      </AbsoluteCenter>
    </WeatherBlock>
  );
}

export default UviBlock;
