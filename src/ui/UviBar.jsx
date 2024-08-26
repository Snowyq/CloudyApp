import AbsoluteCenter from './AbsoluteCenter';

function UviBar({
  width = '100px',
  height = '10px',
  value,
  className = '',
  dotSize = '14px',
}) {
  const dotPositionValue = value < 11 ? value / 11 : 1;
  const dotPosition = Number(dotPositionValue * 100).toFixed(0) + '%';
  console.log(dotPosition);
  let dotColor;
  switch (true) {
    case value < 3:
      dotColor = 'bg-green-500';
      break;
    case value < 6:
      dotColor = 'bg-yellow-500';
      break;
    case value < 8:
      dotColor = 'bg-orange-500';
      break;
    case value < 11:
      dotColor = 'bg-red-500';
      break;
    case value >= 11:
      dotColor = 'bg-violet-500';
      break;
  }
  console.log(dotColor);

  return (
    <div
      className={` ${className} `}
      style={{
        height: height,
        width: width,
      }}
    >
      <div className='relative h-full w-full'>
        {/* progress dot */}
        <div
          className='absolute h-full'
          style={{
            width: `calc(100% - ${dotSize}/2)`,
          }}
        >
          <div
            className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-300`}
            style={{
              left: dotPosition,
              height: dotSize,
              width: dotSize,
            }}
          >
            <AbsoluteCenter
              className={`z-10 h-[60%] w-[60%] rounded-full ${dotColor}`}
            />
          </div>
        </div>
        {/* scale colors */}
        <div className='bg-uvi -z-10 h-full w-full rounded-md'></div>
      </div>
    </div>
  );
}

export default UviBar;
