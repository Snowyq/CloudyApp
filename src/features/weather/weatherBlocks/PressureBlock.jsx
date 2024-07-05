import { useSelector } from 'react-redux';
import WeatherBlock from './WeatherBlock';
import { WiBarometer } from 'react-icons/wi';

function PressureBlock() {
  const pressure = useSelector(
    state => state.weather.weatherData.current.pressure,
  );

  if (!pressure) return null;
  console.log(pressure);

  return (
    <WeatherBlock className='flex'>
      <p className='text-neutral-100'>{pressure}</p>
      <WiBarometer />
    </WeatherBlock>
  );
}

export default PressureBlock;
