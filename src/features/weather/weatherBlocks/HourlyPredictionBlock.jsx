import { useSelector } from 'react-redux';
import HourlyPredictionBlockItem from './HourlyPredictionBlockItem.jsx';
import WeatherBlock from './WeatherBlock.jsx';
import { getHourlyPrediction } from '../weatherSlice.js';
import SideButtons from '../../../ui/SideButtons.jsx';
import { useRef } from 'react';

function HourlyPredictionBlock() {
  const hourlyPrediction = useSelector(getHourlyPrediction);
  const timeZone = useSelector(state => state.weather.weatherData.timezone);
  const ScrollContainerRef = useRef(null);
  const scrollValue = 200;

  function scrollLeft() {
    if (ScrollContainerRef.current)
      ScrollContainerRef.current.scrollBy({
        left: -scrollValue,
        behavior: 'smooth',
      });
  }
  function scrollRight() {
    if (ScrollContainerRef.current)
      ScrollContainerRef.current.scrollBy({
        left: scrollValue,
        behavior: 'smooth',
      });
  }

  if (!hourlyPrediction) return;
  const displayedPrediction = hourlyPrediction;

  return (
    <WeatherBlock className='relative col-span-full flex'>
      <SideButtons
        onLeftArrowClick={scrollLeft}
        onRightArrowClick={scrollRight}
      />
      <div
        className='no-scrollbar mx-4 flex h-full gap-3 overflow-x-scroll sm:gap-4'
        ref={ScrollContainerRef}
      >
        {displayedPrediction.map((item, index) => {
          return (
            <HourlyPredictionBlockItem
              timeZone={timeZone}
              index={index}
              item={item}
              key={index}
            />
          );
        })}
      </div>
    </WeatherBlock>
  );
}

export default HourlyPredictionBlock;
