import ValueDisplay from '../../../ui/ValueDisplay';
import WeatherIcon from '../../../ui/WeatherIcon';

function HourlyPredictionBlockItem({ item, timeZone, index }) {
  const isSunMovement = item.type === 'sunset' || item.type === 'sunrise';

  const timeOptions = isSunMovement
    ? {
        hour: 'numeric',
        minute: 'numeric',
        timeZone,
      }
    : { hour: 'numeric', timeZone };

  const time = new Date(item.dt * 1000).toLocaleTimeString(
    'pl-PL',
    timeOptions,
  );

  if (isSunMovement)
    return (
      <div
        className={`mx-5 flex flex-col items-center justify-center gap-1 sm:mx-6`}
      >
        <WeatherIcon iconId={item.type} className={'text-[40px]'} />
        <p className='text-sm sm:text-base'>{time}</p>
      </div>
    );

  return (
    <div
      className={`flex h-full flex-col items-center justify-between py-2 text-sm sm:text-base`}
    >
      <p className=''>{index == 0 ? 'now' : time}</p>
      <div>
        <WeatherIcon iconId={item.weather[0].icon} className={'text-4xl'} />
        <p className='text-sm text-sky-600'>
          {item.pop != 0 ? item.pop * 100 + '%' : ''}
        </p>
      </div>
      <ValueDisplay value={item.temp} font='semibold' size='[1em]' />
    </div>
  );
}

export default HourlyPredictionBlockItem;
