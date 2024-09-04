import { FiPlusCircle } from 'react-icons/fi';
import Button from '../../ui/Button';
import { useSelector } from 'react-redux';

function WeatherControlPanel() {
  const dataTime = useSelector(state => state.weather.dataTime);
  console.log(dataTime);

  return (
    <div className='grid w-full grid-flow-dense grid-cols-weather-100 justify-center gap-[0.3rem] pb-2 semi-sm:grid-cols-weather-120 semi-sm:gap-2 sm:grid-cols-weather-125 md:grid-cols-weather-135 md:gap-2 lg:grid-cols-weather-150'>
      <div className='col-span-full flex justify-between'>
        <div>
          <Button className='group flex items-center gap-1 text-neutral-400 hover:text-neutral-200'>
            <FiPlusCircle className='text-2xl transition-all' />
            <p className='origin-left transition-all'>add location</p>
          </Button>
        </div>
        <div className='flex'>
          <p>refreshed:</p>
          <p>
            {new Date(dataTime).toLocaleTimeString('pl-PL', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherControlPanel;
