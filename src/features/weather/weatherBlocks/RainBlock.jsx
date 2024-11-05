// import { useSelector } from 'react-redux';
import WeatherBlock from './WeatherBlock';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';

function RainBlock() {
  // const rain = useSelector(state => state.weather.weatherData.daily.rain);
  // const current = useSelector(state => state.weather.weatherData.daily[0].pop);
  // const minutely = useSelector(state => state.weather.weatherData.minutely);
  // console.log(rain);
  // console.log(current);
  // console.log(minutely);

  return (
    <WeatherBlock>
      <WeatherBlockHeader>
        <p>rain</p>
      </WeatherBlockHeader>
    </WeatherBlock>
  );
}

export default RainBlock;
