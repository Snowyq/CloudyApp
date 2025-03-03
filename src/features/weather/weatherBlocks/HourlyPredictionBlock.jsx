import { useSelector } from 'react-redux';
import HourlyPredictionBlockItem from './HourlyPredictionBlockItem.jsx';
import WeatherBlock from './WeatherBlock.jsx';
import { getHourlyPrediction, getWeatherTimeZone } from '../weatherSlice.js';
import SideButtons from '../../../ui/SideButtons.jsx';
import { useRef, useState } from 'react';
import Swipe from '../../../ui/Swipe';

function HourlyPredictionBlock() {
  const displayedPrediction = useSelector(getHourlyPrediction);
  const timeZone = useSelector(getWeatherTimeZone);
  const [translate, setTranslate] = useState(0);

  const scrollLeft = () => setTranslate(translate => translate + 100);
  const scrollRight = () => setTranslate(translate => translate - 100);
  console.log(translate);

  if (!displayedPrediction) return;
  return (
    <WeatherBlock className='relative col-span-full flex'>
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
