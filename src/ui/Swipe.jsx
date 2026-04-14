import { useEffect, useRef, useState } from 'react';
import useTouchable from '../utils/useTouchable';

function Swipe({ children, outsideTranslate, setOutsideTranslate }) {
  const swipeRef = useRef(null);
  const swipeInnerRef = useRef(null);
  const childRef = useRef(null);

  const [maxTranslate, setMaxTranslate] = useState(0);
  const [translated, setTranslated] = useState(outsideTranslate);

  useEffect(() => {
    if (!outsideTranslate || !setOutsideTranslate) return;
    swipeInnerRef.current.style.transition = 'all 0.3s';
    if (outsideTranslate < maxTranslate) {
      swipeInnerRef.current.style.transform = `translateX(${maxTranslate}px)`;
      setOutsideTranslate(maxTranslate);
    } else if (outsideTranslate > 0) {
      swipeInnerRef.current.style.transform = `translateX(${0}px)`;
      setOutsideTranslate(0);
    } else {
      swipeInnerRef.current.style.transform = `translateX(${outsideTranslate}px)`;
    }

    setTranslated(outsideTranslate);
  }, [outsideTranslate, setOutsideTranslate, maxTranslate]);

  const { addListeners } = useTouchable({
    ref: swipeRef,
    customParams: {
      tempTranslate: null,
    },
    onStart: {
      fn: () => {
        swipeInnerRef.current.style.transition = 'none';
      },
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
        const newTranslate = params.customParams.tempTranslate;
        if (setOutsideTranslate) setOutsideTranslate(newTranslate);
        setTranslated(newTranslate);
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
    <div ref={swipeRef} className='h-full w-full select-none overflow-hidden'>
      <div ref={swipeInnerRef} className='h-full w-full'>
        <div ref={childRef} className='h-full w-fit'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Swipe;
