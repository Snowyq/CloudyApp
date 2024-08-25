import { useSelector } from 'react-redux';
import WeatherBlock from './WeatherBlock';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';
import { getCurrentWeather } from '../weatherSlice';

function RainBlock() {
  const rain = useSelector(state => state.weather.weatherData.current.rain);
  const current = useSelector(state => state.weather.weatherData.hourly);
  console.log(rain);

  return (
    <WeatherBlock>
      <WeatherBlockHeader>
        <p>rain</p>
      </WeatherBlockHeader>
    </WeatherBlock>
  );
}

export default RainBlock;
