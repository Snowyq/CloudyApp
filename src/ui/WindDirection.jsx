import { PiArrowFatUp, PiArrowFatUpFill, PiLineVertical } from 'react-icons/pi';

function WindDirection({ windDeg }) {
  function calculatePointsOnCircle({
    pointsNum,
    width,
    height,
    outerRadius,
    innerRadius = outerRadius,
    initialDeg,
  }) {
    const radius = outerRadius - (outerRadius - innerRadius);

    const degBetweenPoints = 360 / pointsNum;
    let currDeg = 0;
    if (initialDeg) currDeg = initialDeg;
    let points = [];
    for (let i = 0; i < pointsNum; i++) {
      // if (currDeg > 360) return;
      console.log(i);
      const sin = Math.sin((currDeg * Math.PI) / 180);
      const cos = Math.cos((currDeg * Math.PI) / 180);
      const mathY = cos * radius;
      const y = mathY + outerRadius;
      const mathX = sin * radius;
      const x = mathX + outerRadius;
      const point = {
        x: x.toFixed(2) - width / 2,
        y: y.toFixed(2),
        deg: currDeg.toFixed(0),
      };
      points.push(point);
      currDeg += degBetweenPoints;
    }
    console.log(points);
    return points;
  }

  return (
    <div>
      <div className='relative z-50 h-24 w-24 rounded-full bg-opacity-20'>
        <div className='absolute left-1/2 top-1/2 z-50 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-700'></div>
        {/* <div className='absolute bottom-0 left-1/2 h-2 w-1 -translate-x-1/2 bg-red-500'></div> */}
        {calculatePointsOnCircle({
          pointsNum: 72,
          width: 1,
          height: 8,
          outerRadius: 48,
          innerRadius: 40,
        }).map(point => {
          return (
            <div
              key={point.deg}
              className={`absolute h-[8px] w-[1px] origin-bottom bg-neutral-300 bg-opacity-20`}
              style={{
                transform: `rotate(${point.deg}deg)`,
                bottom: `${point.y}px`,
                left: `${point.x}px`,
              }}
            ></div>
          );
        })}
        {calculatePointsOnCircle({
          pointsNum: 4,
          width: 4,
          height: 8,
          outerRadius: 48,
          innerRadius: 40,
        }).map(point => {
          return (
            <div
              key={point.deg}
              className={`absolute h-[8px] w-[4px] origin-bottom ${point.deg === '0' ? 'bg-red-500' : 'bg-neutral-200 bg-opacity-40'}`}
              style={{
                transform: `rotate(${point.deg}deg)`,
                bottom: `${point.y}px`,
                left: `${point.x}px`,
              }}
            ></div>
          );
        })}
        {/* {calculatePointsOnCircle({
          pointsNum: 1,
          width: 2,
          height: 2,
          outerRadius: 48,
          innerRadius: 36,
          initialDeg: windDeg + 180,
        }).map(point => {
          return (
            <PiLineVertical
              key={point.deg}
              className={`absolute origin-bottom text-lg`}
              style={{
                transform: `rotate(${point.deg}deg)`,
                bottom: `${point.y}px`,
                left: `${point.x}px`,
              }}
            ></PiLineVertical>
          );
        })} */}
        {calculatePointsOnCircle({
          pointsNum: 1,
          width: 27,
          height: 27,
          outerRadius: 48,
          innerRadius: 30,
          initialDeg: windDeg,
        }).map(point => {
          return (
            <PiArrowFatUpFill
              key={point.deg}
              className={`absolute z-[100] origin-bottom bg-neutral-700 bg-opacity-75 text-2xl text-neutral-300`}
              style={{
                transform: `rotate(${point.deg}deg)`,
                bottom: `${point.y}px`,
                left: `${point.x}px`,
              }}
            ></PiArrowFatUpFill>
          );
        })}
        <p className='absolute left-1/2 top-3 z-50 -translate-x-1/2 text-lg'>
          N
        </p>
        <p className='absolute right-4 top-1/2 z-50 -translate-y-1/2 text-sm opacity-70'>
          E
        </p>
        <p className='absolute bottom-1/2 left-4 z-50 translate-y-1/2 text-sm opacity-70'>
          W
        </p>
        <p className='absolute bottom-3 left-1/2 z-50 -translate-x-1/2 text-sm opacity-70'>
          S
        </p>
        {/* <p className='absolute left-1/2 top-2 z-50 -translate-x-1/2'>N</p> */}
      </div>
    </div>
  );
}

export default WindDirection;
