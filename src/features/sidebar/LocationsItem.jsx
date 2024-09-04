import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { fetchWeather, removeSavedLocation } from '../weather/weatherSlice';
import { closeSidebar } from './sidebarSlice';

function LocationsItem({ edit }) {
  const dispatch = useDispatch();
  const savedLocations = useSelector(state => state.weather.savedLocations);
  console.log(savedLocations);

  function handleLocationDelete(e, id) {
    e.stopPropagation();
    dispatch(removeSavedLocation(id));
  }

  function handleLocationClick(location) {
    console.log(location);
    dispatch(fetchWeather(location));
    dispatch(closeSidebar());
  }

  return (
    <div className='mt-4 flex flex-col gap-1'>
      {savedLocations.map(location => {
        const [name, ...nameRest] = location.placeName.split(',');

        return (
          <div
            key={location.id}
            onClick={() => handleLocationClick(location)}
            className='flex w-full cursor-pointer justify-between rounded-md px-2 py-2 text-lg leading-none hover:bg-neutral-700'
          >
            <div>
              <span className='font-semibold text-neutral-100'>{name}</span>
              <span className='text-sm text-neutral-400'>{`,` + nameRest}</span>
            </div>
            {edit ? (
              <Button
                onClick={e => handleLocationDelete(e, location.id)}
                className='text-sm text-red-500'
              >
                delete
              </Button>
            ) : (
              ''
            )}
          </div>
        );
      })}
    </div>
  );
}

export default LocationsItem;
