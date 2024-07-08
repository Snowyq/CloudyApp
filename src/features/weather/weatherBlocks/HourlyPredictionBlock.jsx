import { useSelector } from 'react-redux';
import HourlyPredictionBlockItem from './HourlyPredictionBlockItem.jsx';
import WeatherBlock from './WeatherBlock.jsx';
function HourlyPredictionBlock() {
  const hourlyPrediction = useSelector(
    state => state.weather.weatherData.hourly,
  );
  // const sunriseData = useSelector(state =>
  //   state.weather.weatherData.daily.slice(0, 2).map(day => day.sunrise),
  // );
  // const sunsetData = useSelector(state =>
  //   state.weather.weatherData.daily.slice(0, 2).map(day => day.sunset),
  // );
  // cons2ole.log(sunriseData);
  if (!hourlyPrediction) return;
  const displayedPrediction = hourlyPrediction.slice(0, 25);
  const lastDt = displayedPrediction[-1];
  const firstDt = displayedPrediction[0];

  return (
    <WeatherBlock className='col-span-2 flex gap-3 overflow-x-scroll sm:col-span-3'>
      {displayedPrediction.map((hour, index) => {
        return <HourlyPredictionBlockItem hour={hour} key={index} />;
      })}
    </WeatherBlock>
  );
}

export default HourlyPredictionBlock;
