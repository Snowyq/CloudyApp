import { useState } from 'react';
import { useSelector } from 'react-redux';
import SideButtons from '../../../ui/SideButtons.jsx';
import Swipe from '../../../ui/Swipe';
import { getHourlyPrediction, getWeatherTimeZone } from '../weatherSlice.js';
import HourlyPredictionBlockItem from './HourlyPredictionBlockItem.jsx';
import WeatherBlock from './WeatherBlock.jsx';

function HourlyPredictionBlock() {
  const displayedPrediction = useSelector(getHourlyPrediction);
  const timeZone = useSelector(getWeatherTimeZone);
  const [translate, setTranslate] = useState(0);

  const scrollLeft = () => setTranslate(translate => translate + 100);
  const scrollRight = () => setTranslate(translate => translate - 100);
  if (!displayedPrediction) return null;
  return (
    <WeatherBlock className='group relative col-span-full flex'>
      <SideButtons
        onLeftArrowClick={scrollLeft}
        onRightArrowClick={scrollRight}
      />

      <Swipe outsideTranslate={translate} setOutsideTranslate={setTranslate}>
        <div className='mx-4 flex h-full w-fit gap-3 sm:gap-4'>
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
      </Swipe>
    </WeatherBlock>
  );
}

export default HourlyPredictionBlock;
