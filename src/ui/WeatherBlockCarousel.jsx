import WeatherBlockCarouselButtons from './WeatherBlockCarouselButtons';
import { Children, useEffect, useState } from 'react';
import WeatherBlockCarouselDots from './WeatherBlockCarouselDots';

function WeatherBlockCarousel({ children }) {
  const [displayedItem, setDisplayedItem] = useState(0);
  const carouselItemsNum = Children.count(children);

  const areMultipleItems = carouselItemsNum > 1;

  function handleMoveForward() {
    if (displayedItem === carouselItemsNum - 1) {
      setDisplayedItem(0);
      return;
    }
    setDisplayedItem(() => displayedItem + 1);
  }
  function handleMoveBack() {
    if (displayedItem === 0) {
      setDisplayedItem(carouselItemsNum - 1);
      return;
    }
    setDisplayedItem(() => displayedItem - 1);
  }

  useEffect(() => {
    if (carouselItemsNum < 2) return;
    const id = setInterval(() => {
      setDisplayedItem(() => {
        if (displayedItem === carouselItemsNum - 1) return 0;
        return displayedItem + 1;
      });
    }, 10000);
    return () => clearInterval(id);
  }, [displayedItem, carouselItemsNum]);

  return (
    <div className='w-full overflow-hidden'>
      {/* Carousel Items */}
      <div
        className='flex transition-all duration-[400ms]'
        style={{
          width: carouselItemsNum * 100 + '%',
          translate: `-${(displayedItem * 100) / carouselItemsNum}% 0px`,
        }}
      >
        {children}
      </div>

      {/* Arrows */}
      {areMultipleItems && (
        <WeatherBlockCarouselButtons
          handleMoveBack={handleMoveBack}
          handleMoveForward={handleMoveForward}
        />
      )}

      {/* dots */}
      {areMultipleItems && (
        <WeatherBlockCarouselDots
          itemsNum={carouselItemsNum}
          className={`absolute bottom-0 left-1/2 mb-1 flex -translate-x-1/2 gap-1 text-sm`}
          displayedItem={displayedItem}
          setDisplayedItem={setDisplayedItem}
        />
      )}
    </div>
  );
}

export default WeatherBlockCarousel;
