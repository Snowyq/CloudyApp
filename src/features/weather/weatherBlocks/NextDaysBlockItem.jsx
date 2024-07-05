import Temperature from '../../../ui/Temperature';
import WeatherIcon from '../../../ui/WeatherIcon';

function NextDaysBlockItem({ day, type }) {

  return (
    <div
      className={`flex-col items-center justify-between ${type === 'additional' ? 'hidden sm:flex' : 'flex'}`}
    >
      <p>
        {new Date(day.dt * 1000).toLocaleDateString('pl-PL', {
          day: 'numeric',
          month: 'numeric',
        })}
      </p>
      <WeatherIcon iconId={day.weather[0].icon} className={'text-[50px]'} />
      <Temperature value={day.temp.day} font='semibold' size='md' />
    </div>
  );
}

export default NextDaysBlockItem;
