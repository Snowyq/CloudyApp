import WeatherBlock from './WeatherBlock';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';
import { useSelector } from 'react-redux';
import { getCurrentWeather } from '../weatherSlice';
import WeatherBlockCarousel from '../../../ui/WeatherBlockCarousel';
import WeatherBlockCarouselItem from '../../../ui/WeatherBlockCarouselItem';

function AlertBlock() {
  const alerts = useSelector(state => state.weather.weatherData.alerts);
  const current = useSelector(getCurrentWeather);

  function showTime(time) {
    const dateOptions = { hour: 'numeric', minute: 'numeric' };

    return new Date(time * 1000).toLocaleTimeString('pl-PL', dateOptions);
  }

  if (!alerts) return null;

  console.log(alerts);
  console.log(current);

  return (
    <WeatherBlock className='col-span-2'>
      <WeatherBlockHeader>
        <p>Alerts</p>
      </WeatherBlockHeader>
      <WeatherBlockCarousel>
        {alerts.map((alert, index) => (
          <WeatherBlockCarouselItem
            key={index}
            className='flex flex-col overflow-hidden overflow-ellipsis whitespace-nowrap px-3'
          >
            <p className='text-xs leading-none text-neutral-400'>
              {alert.sender_name}
            </p>
            <p className='overflow-hidden overflow-ellipsis whitespace-nowrap text-base leading-tight'>
              {alert.event}
            </p>
            <p className='text-sm text-neutral-400'>
              from {showTime(alert.start)} to {showTime(alert.end)}
            </p>
          </WeatherBlockCarouselItem>
        ))}
      </WeatherBlockCarousel>
    </WeatherBlock>
  );
}

export default AlertBlock;
