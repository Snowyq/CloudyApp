import { useDispatch, useSelector } from 'react-redux';
import { getShowSidebar, toggleSidebar } from './sidebarSlice';
import Button from '../../ui/Button';
import { PiSidebar } from 'react-icons/pi';
import { setLocationEditting } from '../locations/locationsSlice';

function ToggleSidebarBtn() {
  const dispatch = useDispatch();
  const showSidebar = useSelector(getShowSidebar);

  return (
    <Button
      className='rounded px-2 py-1 text-2xl text-neutral-100 transition-all hover:bg-neutral-700'
      onClick={e => {
        e.stopPropagation();
        if (showSidebar) dispatch(setLocationEditting(false));
        dispatch(toggleSidebar());
      }}
    >
      <PiSidebar />
    </Button>
  );
}

export default ToggleSidebarBtn;
