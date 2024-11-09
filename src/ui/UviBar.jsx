import AbsoluteCenter from './AbsoluteCenter';

function UviBar({
  width = '100px',
  height = '10px',
  value,
  className = '',
  dotSize = '20px',
  dotColor = '',
}) {
  const dotPositionValue = value < 11 ? value / 11 : 1;
  const dotPosition = Number(dotPositionValue * 100).toFixed(0) + '%';

  return (
    <div
      className={` ${className} `}
      style={{
        height: height,
        width: width,
      }}
    >
      <div className='relative h-full w-full'>
        <div
          className='absolute h-full'
          style={{
            width: `calc(100% - ${dotSize})`,
            marginLeft: `calc(${dotSize} / 2)`,
          }}
        >
          <div
            className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-200 shadow-sm shadow-black`}
            style={{
              left: dotPosition,
              height: dotSize,
              width: dotSize,
            }}
          >
            <AbsoluteCenter
              className={`z-[1000] h-[65%] w-[65%] rounded-full ${dotColor}`}
            />
          </div>
        </div>
        <div className='-z-10 h-full w-full rounded-md bg-uvi'></div>
      </div>
    </div>
  );
}

export default UviBar;
