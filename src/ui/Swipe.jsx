import { useState, useRef, useEffect } from 'react';
import useTouchable from '../utils/useTouchable';

function Swipe({ children }) {
  const swipeRef = useRef(null);
  const swipeInnerRef = useRef(null);
  const childRef = useRef(null);

  const [maxTranslate, setMaxTranslate] = useState(0);
  const [translated, setTranslated] = useState(0);
  const { addListeners } = useTouchable({
    ref: swipeRef,
    customParams: {
      tempTranslate: null,
    },
    onMove: {
      fn: (params, event) => {
        if (Math.abs(params.deltaX) > Math.abs(params.deltaY)) {
          if (event.cancelable) event.preventDefault();
        } else if (Math.abs(params.deltaY) < 25) {
          if (event.cancelable) event.preventDefault();
        }

        const distance = (params.tempEndX - params.tempStartX) * 1;
        params.customParams.tempTranslate = translated + distance;

        let translateValue;
        if (params.customParams.tempTranslate > 0) {
          translateValue = 0;
          params.customParams.tempTranslate = 0;
        } else if (params.customParams.tempTranslate < maxTranslate) {
          translateValue = maxTranslate;
          params.customParams.tempTranslate = maxTranslate;
        } else {
          translateValue = params.customParams.tempTranslate;
        }

        swipeInnerRef.current.style.transform = `translateX(${translateValue}px)`;
      },
    },
    onEnd: {
      fn: params => {
        setTranslated(params.customParams.tempTranslate);
      },
    },
  });

  useEffect(addListeners);
  useEffect(() => {
    if (childRef.current) {
      const childWidth = childRef.current.getBoundingClientRect().width;
      const swipeWidth = swipeRef.current.getBoundingClientRect().width;
      const max = childWidth - swipeWidth;
      setMaxTranslate(-max);
    }
  }, [children, childRef, swipeRef]);

  return (
    <div ref={swipeRef} className='h-full w-full overflow-hidden'>
      <div ref={swipeInnerRef} className='h-full w-full'>
        <div ref={childRef} className='h-full w-fit'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Swipe;
