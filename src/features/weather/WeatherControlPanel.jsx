import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  addLocation,
  getLocations,
  removeLocation,
} from '../locations/locationsSlice';
import { getWeatherLocation } from './weatherSlice';
import toast from 'react-hot-toast';
import { PiCheckCircleDuotone, PiXCircleDuotone } from 'react-icons/pi';

function WeatherControlPanel() {
  const weatherLocation = useSelector(getWeatherLocation);
  const dispatch = useDispatch();
  const { savedLocations } = useSelector(getLocations);
  const isSavedLocation = savedLocations.find(
    location => location.id === weatherLocation.id,
  );

  function handleAddLocationBtn() {
    if (isSavedLocation) {
      dispatch(removeLocation(weatherLocation.id));
      toast('Location removed!', {
        duration: 2000,
        icon: <PiXCircleDuotone />,
      });
    } else {
      dispatch(addLocation(weatherLocation));
      toast('Location added!', {
        duration: 2000,
        icon: <PiCheckCircleDuotone />,
      });
    }
  }

  return (
    <div className='grid w-full max-w-[1200px] grid-flow-dense grid-cols-weather-100 justify-center gap-[0.3rem] pb-2 semi-sm:grid-cols-weather-120 semi-sm:gap-2 sm:grid-cols-weather-125 md:grid-cols-weather-135 md:gap-2 lg:grid-cols-weather-150'>
      <div className='col-span-full flex justify-between'>
        <div>
          <Button
            onClick={() => handleAddLocationBtn()}
            className='group flex items-center gap-1 text-neutral-400 hover:text-neutral-200'
          >
            {isSavedLocation ? (
              <FiMinusCircle className='text-2xl transition-all' />
            ) : (
              <FiPlusCircle className='text-2xl transition-all' />
            )}
            <p className='origin-left transition-all'>
              {isSavedLocation ? 'remove location' : 'save location'}
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WeatherControlPanel;
