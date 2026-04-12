function useTouchable({ onStart, onMove, onEnd, init, customParams, ref }) {
  const params = {
    tempStartX: null,
    tempStartY: null,
    tempEndX: null,
    tempEndY: null,
    deltaX: null,
    deltaY: null,
    minMoveVal: 40,
    direction: null,
    customParams,
  };

  if (init) init();

  function handleTouchStart(event) {
    onStart?.preFn?.(params, event);
    params.tempEndX = event.targetTouches[0].clientX;
    params.tempEndY = event.targetTouches[0].clientY;
    params.tempStartX = event.targetTouches[0].clientX;
    params.tempStartY = event.targetTouches[0].clientY;
    onStart?.fn?.(params, event);
  }

  function handleTouchMove(event) {
    
    onMove?.preFn?.(params, event);
    params.tempEndX = event.targetTouches[0].clientX;
    params.tempEndY = event.targetTouches[0].clientY;
    params.deltaX = params.tempEndX - params.tempStartX;
    params.deltaY = params.tempEndY - params.tempStartY;
    params.direction = detectMoveDirections();
    if (params.deltaX > params.minMoveVal) onMove?.fn?.(params, event);
  }

  function handleTouchEnd(event) {
    onEnd?.fn?.(params, event);
  }

  function detectMoveDirections() {
    const { deltaX, deltaY, minMoveVal } = params;

    if (Math.abs(deltaX) < minMoveVal && Math.abs(deltaY) < minMoveVal) return;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) params.direction = 'RIGHT';
      if (deltaX < 0) params.direction = 'LEFT';
    }
    // if (Math.abs(deltaX) > Math.abs(deltaY)) {
    // }
  }

  function addListeners() {
    if (!ref) return;

    const container = ref.current;
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
  }
  return { handleTouchEnd, handleTouchMove, handleTouchStart, addListeners };
}

export default useTouchable;
