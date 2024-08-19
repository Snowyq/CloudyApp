import { ArrowCircleDown, ArrowCircleUp } from '@phosphor-icons/react';

function PressureBar({ value, maxValue = 900, minValue = 1100 }) {
  // (minValue)850 = -180deg
  // (maxValue)1100 = 0deg
  // (maxValue-minValue) / 180 * (pressure - minValue)
  const rotateValue = ((maxValue - minValue) / 180) * (value - minValue);
  const rotate = `rotate(${(-rotateValue + 360).toFixed(0)}deg)`;
  console.log(rotate);
  console.log(new Date(1724062253 * 1000));
  return (
    <div className='relative h-12 w-24 before:absolute before:-bottom-14 before:z-10 before:h-14 before:w-24 before:bg-neutral-700'>
      {/* <div className='absolute left-0 top-0 h-24 w-24 rounded-full border-8 border-red-400'></div> */}
      <div className='relative h-24 w-24 rounded-full bg-neutral-300 bg-opacity-20'>
        <div
          className={`tranform absolute h-12 w-24 origin-bottom rounded-tl-full rounded-tr-full bg-blue-500`}
          style={{ transform: rotate }}
        ></div>
        <div className='absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-b-2 border-black bg-neutral-700'></div>
        <div className='absolute bottom-1/2 left-1/2 z-10 flex w-[103px] -translate-x-1/2 translate-y-5 justify-between text-sm'>
          <ArrowCircleDown />
          <ArrowCircleUp />
        </div>
      </div>
      <p className='absolute left-1/2 top-10 z-10 flex -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-neutral-100'>
        {value}
      </p>
    </div>
  );
}

export default PressureBar;
