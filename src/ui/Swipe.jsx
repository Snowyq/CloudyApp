import { useState, useRef, useEffect } from 'react';

function Swipe({ children }) {
  const swipeRef = useRef(null);
  const swipeInnerRef = useRef(null);
  const childRef = useRef(null);

  const [maxTranslate, setMaxTranslate] = useState(0);
  const [translated, setTranslated] = useState(0);

  let tempStartX, tempStartY;
  let tempEndX, tempEndY;
  let deltaX, deltaY;
  let tempTranslate;

  useEffect(() => {
    if (childRef.current) {
      const childWidth = childRef.current.getBoundingClientRect().width;
      const swipeWidth = swipeRef.current.getBoundingClientRect().width;
      const max = childWidth - swipeWidth;
      setMaxTranslate(-max);
    }
  }, [children]);
  useEffect(() => {
    const container = swipeRef.current;

    container.addEventListener('touchstart', handleTouchStart, {
      passive: false,
    });
    container.addEventListener('touchmove', handleTouchMove, {
      passive: false,
    });
    container.addEventListener('touchend', handleTouchEnd, {
      passive: false,
    });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  });

  function handleTouchStart(e) {
    tempEndX = e.targetTouches[0].clientX;
    tempStartX = e.targetTouches[0].clientX;
    tempStartY = e.targetTouches[0].clientY;
  }

  function handleTouchMove(e) {
    tempEndX = e.targetTouches[0].clientX;
    deltaX = e.targetTouches[0].clientX - tempStartX;
    deltaY = e.targetTouches[0].clientY - tempStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      e.preventDefault();
    } else {
      // return;
    }

    const distance = tempEndX - tempStartX;
    tempTranslate = translated + distance;

    let translateValue;
    if (tempTranslate > 0) {
      translateValue = 0;
      tempTranslate = 0;
    } else if (tempTranslate < maxTranslate) {
      translateValue = maxTranslate;
      tempTranslate = maxTranslate;
    } else {
      translateValue = tempTranslate;
    }

    swipeInnerRef.current.style.transform = `translateX(${translateValue}px)`;
  }

  function handleTouchEnd() {
    setTranslated(tempTranslate);
  }

  // swipeRef.add

  return (
    <div
      ref={swipeRef}
      // onTouchStart={handleTouchStart}
      // onTouchMove={handleTouchMove}
      // onTouchEnd={handleTouchEnd}
      className='h-full w-full overflow-hidden'
    >
      <div ref={swipeInnerRef} className='h-full w-full'>
        <div ref={childRef} className='h-full w-fit'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Swipe;
