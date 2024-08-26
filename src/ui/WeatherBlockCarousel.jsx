import WeatherBlockCarouselButtons from './WeatherBlockCarouselButtons';
import { Children, useState } from 'react';
import WeatherBlockCarouselDots from './WeatherBlockCarouselDots';

function WeatherBlockCarousel({ children }) {
  const [displayedItem, setDisplayedItem] = useState(0);
  const carouselItemsNum = Children.count(children);

  function handleMoveForward() {
    if (displayedItem === carouselItemsNum - 1) return;
    setDisplayedItem(() => displayedItem + 1);
  }
  function handleMoveBack() {
    if (displayedItem === 0) return;
    setDisplayedItem(() => displayedItem - 1);
  }

  return (
    <div className=''>
      {/* Carousel Items */}
      {children[displayedItem]}

      {/* Arrows */}
      <WeatherBlockCarouselButtons
        handleMoveBack={handleMoveBack}
        handleMoveForward={handleMoveForward}
      />

      {/* dots */}
      <WeatherBlockCarouselDots
        itemsNum={carouselItemsNum}
        className={`absolute bottom-0 left-1/2 mb-1 flex -translate-x-1/2 gap-1 text-sm`}
        displayedItem={displayedItem}
        setDisplayedItem={setDisplayedItem}
      />
    </div>
  );
}

export default WeatherBlockCarousel;
