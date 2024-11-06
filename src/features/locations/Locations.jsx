import { useDispatch } from 'react-redux';
import { toggleLocationsEdit } from '../sidebar/sidebarSlice';

import { FaLocationDot } from 'react-icons/fa6';
import Button from '../../ui/Button';
import LocationsItem from './LocationsItem';

function Locations() {
  const dispatch = useDispatch();

  return (
    <div className='mt-2'>
      <div className='flex items-center justify-between'>
        <div className='flex w-fit items-center gap-1 rounded-full bg-neutral-700 px-4 py-1 text-lg'>
          <FaLocationDot />
          <p>Locations</p>
        </div>
        <Button
          onClick={() => dispatch(toggleLocationsEdit())}
          className={`px-2 py-1 text-neutral-400 hover:text-neutral-200`}
        >
          Edit
        </Button>
      </div>
      <LocationsItem />
    </div>
  );
}

export default Locations;
