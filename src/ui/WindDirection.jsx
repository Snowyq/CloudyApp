import { PiArrowFatUp, PiArrowFatUpFill, PiLineVertical } from 'react-icons/pi';
import { calculatePointsOnCircle } from '../utils/helpers';

function WindDirection({ windDeg }) {
  return (
    <div>
      <div className='bg-opacity-2 relative z-50 h-24 w-24 scale-[1] rounded-full'>
        <div className='absolute left-1/2 top-1/2 z-50 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-700'></div>
        {/* <div className='absolute bottom-0 left-1/2 h-2 w-1 -translate-x-1/2 bg-red-500'></div> */}
        {/* <p className='absolute left-1/2 top-1/2 z-[100] -translate-x-1/2 -translate-y-1/2'>
          {windDeg}°
        </p> */}
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
              className={`h-27 w-27 absolute z-[100] origin-bottom text-2xl text-neutral-300`}
              style={{
                transform: `rotate(${point.deg}deg)`,
                bottom: `${point.y}px`,
                left: `${point.x}px`,
              }}
            ></PiArrowFatUpFill>
          );
        })}
        {calculatePointsOnCircle({
          pointsNum: 1,
          width: 25,
          height: 25,
          outerRadius: 48,
          innerRadius: 29,
          initialDeg: windDeg,
        }).map(point => {
          return (
            <div
              style={{
                transform: `rotate(${point.deg}deg)`,
                bottom: `${point.y}px`,
                left: `${point.x - 1.5}px`,
              }}
              className='opacity-1 absolute z-[99] h-[25px] w-[25px] origin-bottom rounded-full bg-neutral-700 opacity-90'
              key={point.deg}
            ></div>
          );
        })}
        <div className='text-xs'>
          <p className='absolute left-1/2 top-2 z-50 -translate-x-1/2 text-sm'>
            N
          </p>
          <p className='absolute right-3.5 top-1/2 z-50 -translate-y-1/2 opacity-70'>
            E
          </p>
          <p className='absolute bottom-1/2 left-3.5 z-50 translate-y-1/2 opacity-70'>
            W
          </p>
          <p className='absolute bottom-2 left-1/2 z-50 -translate-x-1/2 opacity-70'>
            S
          </p>
        </div>
        {/* <p className='absolute left-1/2 top-2 z-50 -translate-x-1/2'>N</p> */}
      </div>
    </div>
  );
}

export default WindDirection;
