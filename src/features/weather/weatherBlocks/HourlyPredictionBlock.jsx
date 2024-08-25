import { useSelector } from 'react-redux';
import HourlyPredictionBlockItem from './HourlyPredictionBlockItem.jsx';
import WeatherBlock from './WeatherBlock.jsx';
import { getHourlyPrediction } from '../weatherSlice.js';

function HourlyPredictionBlock() {
  const hourlyPrediction = useSelector(getHourlyPrediction);
  const timeZone = useSelector(state => state.weather.weatherData.timezone);
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
    <WeatherBlock className='no-scrollbar col-span-full flex gap-3 overflow-x-scroll'>
      {displayedPrediction.map((item, index) => {
        return (
          <HourlyPredictionBlockItem
            timeZone={timeZone}
            item={item}
            key={index}
          />
        );
      })}
    </WeatherBlock>
  );
}

export default HourlyPredictionBlock;
