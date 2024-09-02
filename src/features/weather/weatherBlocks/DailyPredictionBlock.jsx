import { useSelector } from 'react-redux';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';
import WeatherBlock from './WeatherBlock';
import DailyPredictionBlockItem from './DailyPredictionBlockItem';

function DailyPredictionBlock() {
  const dailyPredictions = useSelector(
    state => state.weather.weatherData.daily,
  );

  const temperatureAmplitudePoints = dailyPredictions.reduce(
    (acc, curr, index) => {
      console.log(acc);
      console.log(curr);
      return {
        min: Math.min(acc.min, curr.temp.min),
        max: Math.max(acc.max, curr.temp.max),
      };
    },
    { min: dailyPredictions[0].temp.min, max: dailyPredictions[0].temp.max },
  );

  console.log(temperatureAmplitudePoints);

  if (!dailyPredictions) return null;

  return (
    <WeatherBlock className='col-span-full row-span-4 semi-sm:col-span-3'>
      <WeatherBlockHeader>
        <p className='ml-1'>Daily Prediction</p>
      </WeatherBlockHeader>
      <div className='mx-2 mt-2 h-[90%]'>
        {dailyPredictions.map((item, index) => (
          <DailyPredictionBlockItem
            item={item}
            key={index}
            index={index}
            width={100 / dailyPredictions.length}
            minMaxTemp={temperatureAmplitudePoints}
          />
        ))}
      </div>
    </WeatherBlock>
  );
}

export default DailyPredictionBlock;
