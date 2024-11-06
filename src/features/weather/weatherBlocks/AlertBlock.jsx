import WeatherBlock from './WeatherBlock';
import WeatherBlockHeader from '../../../ui/WeatherBlockHeader';
import { useSelector } from 'react-redux';
import WeatherBlockCarousel from '../../../ui/Carousel';
import { GoAlertFill } from 'react-icons/go';
import { FiAlertCircle } from 'react-icons/fi';
import { getWeatherAlerts } from '../weatherSlice';

function AlertBlock() {
  const alerts = useSelector(getWeatherAlerts);

  function showTime(time) {
    const dateOptions = { hour: 'numeric', minute: 'numeric' };
    return new Date(time * 1000).toLocaleTimeString('pl-PL', dateOptions);
  }

  if (!alerts) return null;

  return (
    <WeatherBlock className='col-span-2'>
      <WeatherBlockHeader className='ml-1'>
        <FiAlertCircle className='mr-1 text-sm' />
        <p>Alerts</p>
      </WeatherBlockHeader>
      <WeatherBlockCarousel>
        {alerts.map((alert, index) => (
          <div key={index} className='flex w-full items-start gap-3 px-3 py-1'>
            <GoAlertFill className='hidden shrink-0 text-5xl semi-sm:flex' />
            <div className='flex flex-col overflow-hidden leading-none'>
              <p className='overflow-hidden overflow-ellipsis whitespace-nowrap text-xs text-neutral-400'>
                {alert.sender_name}
              </p>
              <p className='max-h-[2.5em] overflow-hidden overflow-ellipsis whitespace-nowrap text-base semi-sm:line-clamp-2 semi-sm:whitespace-normal semi-sm:text-lg semi-sm:leading-tight'>
                {alert.event}
              </p>
              <p className='text-sm text-neutral-400'>
                from {showTime(alert.start)} to {showTime(alert.end)}
              </p>
            </div>
          </div>
        ))}
      </WeatherBlockCarousel>
    </WeatherBlock>
  );
}

export default AlertBlock;
