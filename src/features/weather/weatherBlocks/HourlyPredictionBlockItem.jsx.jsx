import Temperature from '../../../ui/Temperature';
import WeatherIcon from '../../../ui/WeatherIcon';

function HourlyPredictionBlockItem({ hour, type }) {
  return (
    <div
      className={`flex-col items-center justify-center gap-1 ${type === 'additional' ? 'hidden sm:flex' : 'flex'}`}
    >
      <p>
        {new Date(hour.dt * 1000).toLocaleTimeString('pl-PL', {
          hour: 'numeric',
        })}
      </p>
      <WeatherIcon iconId={hour.weather[0].icon} className={'text-[50px]'} />
      <Temperature value={hour.temp} font='semibold' size='md' />
    </div>
  );
}

export default HourlyPredictionBlockItem;
