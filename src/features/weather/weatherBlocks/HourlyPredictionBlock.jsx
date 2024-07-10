import { useSelector } from 'react-redux';
import HourlyPredictionBlockItem from './HourlyPredictionBlockItem.jsx';
import WeatherBlock from './WeatherBlock.jsx';
import { getHourlyPrediction } from '../weatherSlice.js';
function HourlyPredictionBlock() {
  const hourlyPrediction = useSelector(getHourlyPrediction);

  // const sunriseData = useSelector(state =>
  //   state.weather.weatherData.daily.slice(0, 2).map(day => day.sunrise),
  // );
  // const sunsetData = useSelector(state =>
  //   state.weather.weatherData.daily.slice(0, 2).map(day => day.sunset),
  // );
  // cons2ole.log(sunriseData);
  if (!hourlyPrediction) return;
  const displayedPrediction = hourlyPrediction;

  return (
    <WeatherBlock className='col-span-2 flex gap-3 overflow-x-scroll sm:col-span-3'>
      {displayedPrediction.map((item, index) => {
        return <HourlyPredictionBlockItem item={item} key={index} />;
      })}
    </WeatherBlock>
  );
}

export default HourlyPredictionBlock;
