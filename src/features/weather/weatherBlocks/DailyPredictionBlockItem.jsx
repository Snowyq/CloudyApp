import { useSelector } from 'react-redux';
import ValueDisplay from '../../../ui/ValueDisplay';
import WeatherIcon from '../../../ui/WeatherIcon';

function DailyPredictionBlockItem({ item, index, width, minMaxTemp }) {
  const currTemp = useSelector(state => state.weather.weatherData.current.temp);

  const iconId = item.weather[0].icon;
  const { min: globalMin, max: globalMax } = minMaxTemp;
  const globalMinMaxDistance = globalMax - globalMin;
  const procentPerUnit = 100 / globalMinMaxDistance;
  const min = item.temp.min;
  const amplitudePositionLeft =
    distanceBetweenValues(globalMin, min) * procentPerUnit;
  const max = item.temp.max;
  const amplitudeWidth = distanceBetweenValues(min, max) * procentPerUnit;
  console.log(currTemp, min, max);

  const currTempPosition =
    distanceBetweenValues(globalMin, currTemp) * procentPerUnit;

  function distanceBetweenValues(num1, num2) {
    if (num1 > num2) {
      return num1 - num2;
    } else {
      return num2 - num1;
    }
  }

  return (
    <div
      className='flex items-center justify-between gap-1'
      style={{ height: `${width}%` }}
    >
      <p className='w-[10%] text-base semi-sm:text-lg'>
        {index == 0
          ? 'today'
          : new Date(item.dt * 1000).toLocaleDateString('pl-PL', {
              weekday: 'short',
            })}
      </p>

      <div className='relative flex w-[70%] items-center justify-end semi-sm:gap-2 sm:gap-5'>
        <div className='flex w-8 flex-col items-center'>
          <WeatherIcon
            iconId={iconId}
            className='text-xl semi-sm:text-2xl sm:text-3xl'
          />
          <p className='text-xs text-sky-600'>
            {item.pop != 0 ? item.pop * 100 + '%' : ''}
          </p>
        </div>
        <div className='mr-0.5 flex w-[90%] items-center justify-end gap-0.5 text-sm semi-sm:mr-2 semi-sm:gap-2 semi-sm:text-base sm:text-lg'>
          <ValueDisplay
            value={min}
            className='flex w-8 justify-end'
            size='[1em]'
          />
          <div className='relative h-2 w-[80%] rounded-full bg-neutral-800 semi-sm:h-2'>
            {/* days amplitude */}
            <div
              className='absolute bottom-0 h-full rounded-full bg-neutral-500'
              style={{
                left: `${amplitudePositionLeft}%`,
                width: `${amplitudeWidth}%`,
              }}
            ></div>

            {/* current temperature */}
            {index === 0 ? (
              <div
                className='absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-neutral-300 shadow-md'
                style={{ left: `${currTempPosition}%` }}
              ></div>
            ) : null}
          </div>
          <ValueDisplay value={max} className='w-7' size='[1em]' />
        </div>
      </div>
    </div>
  );
}

export default DailyPredictionBlockItem;
