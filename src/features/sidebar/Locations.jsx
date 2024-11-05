import { FaLocationDot } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import LocationsItem from './LocationsItem';
import { toggleLocationsEdit } from './sidebarSlice';

function Locations() {
  const dispatch = useDispatch();
  const edit = useSelector(state => state.sidebar.locationsEdit);

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
      <LocationsItem edit={edit} />
    </div>
  );
}

export default Locations;
