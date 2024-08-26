import Button from './Button';

function WeatherBlockCarouselDots({
  itemsNum,
  className,
  displayedItem,
  setDisplayedItem,
}) {
  if (itemsNum <= 0) return null;
  return (
    <div className={className}>
      {Array.from({ length: itemsNum }, (_, index) => {
        return (
          <Button
            key={index}
            onClick={() => setDisplayedItem(index)}
            className='p-0.5'
          >
            <div
              className={`h-[0.5em] w-[0.5em] rounded-full ${index == displayedItem ? 'scale-110 bg-neutral-300 shadow-sm shadow-neutral-900' : 'bg-neutral-500'}`}
            ></div>
          </Button>
        );
      })}
    </div>
  );
}

export default WeatherBlockCarouselDots;
