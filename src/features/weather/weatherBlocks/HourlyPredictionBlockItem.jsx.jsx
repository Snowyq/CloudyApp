import Temperature from '../../../ui/Temperature';
import WeatherIcon from '../../../ui/WeatherIcon';

function HourlyPredictionBlockItem({ item }) {
  const isSunMovement = item.type === 'sunset' || item.type === 'sunrise';

  const timeOptions = isSunMovement
    ? {
        hour: 'numeric',
        minute: 'numeric',
      }
    : { hour: 'numeric' };

  const time = new Date(item.dt * 1000).toLocaleTimeString(
    'pl-PL',
    timeOptions,
  );

  if (isSunMovement)
    return (
      <div className={`mx-5 flex flex-col items-center justify-center gap-1`}>
        <WeatherIcon iconId={item.type} className={'text-[50px]'} />
        <p className=''>{time}</p>
      </div>
    );

  return (
    <div className={`flex flex-col items-center justify-center gap-1`}>
      <p>{time}</p>
      <WeatherIcon iconId={item.weather[0].icon} className={'text-[50px]'} />
      <Temperature value={item.temp} font='semibold' size='md' />
    </div>
  );
}

export default HourlyPredictionBlockItem;
