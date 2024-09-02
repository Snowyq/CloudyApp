import SideButtons from './SideButtons';
import { Children, useEffect, useState } from 'react';
import CarouselDots from './CarouselDots';
import CarouselItems from './CarouselItems';

function Carousel({ children }) {
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

  const CarouselItemsContainerWidth = carouselItemsNum * 100;
  const CarouselItemWidth = 100 / carouselItemsNum;
  const translate = areMultipleItems
    ? (displayedItem * 100) / carouselItemsNum
    : 0;

  return (
    <div className='w-full overflow-hidden'>
      {/* Carousel Items */}
      <CarouselItems
        className='flex overflow-hidden transition-all duration-[400ms]'
        style={{
          width: CarouselItemsContainerWidth + '%',
          translate: `-${translate}% 0px`,
        }}
        CarouselItemWidth={CarouselItemWidth}
      >
        {children}
      </CarouselItems>

      {/* Arrows */}
      {areMultipleItems && (
        <SideButtons
          onLeftArrowClick={handleMoveBack}
          onRightArrowClick={handleMoveForward}
        />
      )}

      {/* dots */}
      {areMultipleItems && (
        <CarouselDots
          itemsNum={carouselItemsNum}
          className={`absolute bottom-0 left-1/2 mb-1 flex -translate-x-1/2 gap-1 text-sm`}
          displayedItem={displayedItem}
          setDisplayedItem={setDisplayedItem}
        />
      )}
    </div>
  );
}

export default Carousel;
