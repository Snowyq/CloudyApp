function useTouchable({ onStart, onMove, onEnd, init, customParams, ref }) {
  const params = {
    tempStartX: null,
    tempStartY: null,
    tempEndX: null,
    tempEndY: null,
    deltaX: null,
    deltaY: null,
    isPointerDown: false,
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
    onMove?.fn?.(params, event);
  }

  function handleTouchEnd(event) {
    onEnd?.fn?.(params, event);
  }

  function handlePointerDown(event) {
    if (event.pointerType === 'touch' || event.button !== 0) return;
    onStart?.preFn?.(params, event);
    params.tempEndX = event.clientX;
    params.tempEndY = event.clientY;
    params.tempStartX = event.clientX;
    params.tempStartY = event.clientY;
    params.isPointerDown = true;
    event.currentTarget?.setPointerCapture?.(event.pointerId);
    onStart?.fn?.(params, event);
  }

  function handlePointerMove(event) {
    if (event.pointerType === 'touch' || !params.isPointerDown) return;
    onMove?.preFn?.(params, event);
    params.tempEndX = event.clientX;
    params.tempEndY = event.clientY;
    params.deltaX = params.tempEndX - params.tempStartX;
    params.deltaY = params.tempEndY - params.tempStartY;
    onMove?.fn?.(params, event);
  }

  function handlePointerUp(event) {
    if (event.pointerType === 'touch' || !params.isPointerDown) return;
    params.isPointerDown = false;
    onEnd?.fn?.(params, event);
    event.currentTarget?.releasePointerCapture?.(event.pointerId);
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
    container.addEventListener('pointerdown', handlePointerDown, {
      passive: false,
    });
    container.addEventListener('pointermove', handlePointerMove, {
      passive: false,
    });
    container.addEventListener('pointerup', handlePointerUp, {
      passive: false,
    });
    container.addEventListener('pointercancel', handlePointerUp, {
      passive: false,
    });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('pointercancel', handlePointerUp);
    };
  }
  return { handleTouchEnd, handleTouchMove, handleTouchStart, addListeners };
}

export default useTouchable;
