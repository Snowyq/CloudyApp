import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addSavedLocation, removeSavedLocation } from './weatherSlice';

function WeatherControlPanel() {
  const location = useSelector(state => state.weather.location);
  const dispatch = useDispatch();

  function handleAddLocationBtn() {
    if (location.saved) dispatch(removeSavedLocation(location.id));
    if (!location.saved) dispatch(addSavedLocation(location));
  }

  return (
    <div className='grid w-full max-w-[1200px] grid-flow-dense grid-cols-weather-100 justify-center gap-[0.3rem] pb-2 semi-sm:grid-cols-weather-120 semi-sm:gap-2 sm:grid-cols-weather-125 md:grid-cols-weather-135 md:gap-2 lg:grid-cols-weather-150'>
      <div className='col-span-full flex justify-between'>
        <div>
          <Button
            onClick={() => handleAddLocationBtn()}
            className='group flex items-center gap-1 text-neutral-400 hover:text-neutral-200'
          >
            {location.saved ? (
              <FiMinusCircle className='text-2xl transition-all' />
            ) : (
              <FiPlusCircle className='text-2xl transition-all' />
            )}
            <p className='origin-left transition-all'>
              {location.saved ? 'remove location' : 'save location'}
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WeatherControlPanel;
