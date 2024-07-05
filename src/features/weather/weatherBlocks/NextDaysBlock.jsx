import { useSelector } from 'react-redux';
import WeatherBlock from './WeatherBlock';
import { getDailyPrediction } from '../weatherSlice';
import NextDaysBlockItem from './NextDaysBlockItem';

function NextDaysBlock() {
  const dailyPrediction = useSelector(getDailyPrediction);
  if (!dailyPrediction) return;
  console.log(dailyPrediction);

  return (
    <WeatherBlock className='col-span-2 flex justify-between sm:col-span-3'>
      {dailyPrediction.map((day, index) => {
        return <NextDaysBlockItem day={day} key={index} />;
      })}
    </WeatherBlock>
  );
}

export default NextDaysBlock;
