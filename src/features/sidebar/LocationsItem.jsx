import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { fetchWeather, removeSavedLocation } from '../weather/weatherSlice';
import { closeSidebar } from './sidebarSlice';
import { useNavigate } from 'react-router-dom';

function LocationsItem({ edit }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const savedLocations = useSelector(state => state.weather.savedLocations);
  console.log(savedLocations);

  function handleLocationDelete(e, id) {
    e.stopPropagation();
    dispatch(removeSavedLocation(id));
  }

  function handleLocationClick(location) {
    navigate(`app/weather/current/${location.id}`);

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
              {nameRest[0] ? (
                <span className='text-sm text-neutral-400'>
                  {`,` + nameRest}
                </span>
              ) : null}
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
