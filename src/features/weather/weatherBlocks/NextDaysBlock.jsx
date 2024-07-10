// import { useSelector } from 'react-redux';
// import WeatherBlock from './WeatherBlock';
// import NextDaysBlockItem from './HourlyPredictionBlockItem.jsx';

// function NextDaysBlock() {
//   if (!dailyPrediction) return;

//   return (
//     <WeatherBlock className='col-span-2 flex justify-between sm:col-span-3'>
//       {dailyPrediction.slice(0, 5).map((day, index) => {
//         return <NextDaysBlockItem day={day} key={index} />;
//       })}

//       {dailyPrediction.slice(5, -1).map((day, index) => {
//         return <NextDaysBlockItem day={day} key={index} type='additional' />;
//       })}
//     </WeatherBlock>
//   );
// }

// export default NextDaysBlock;
