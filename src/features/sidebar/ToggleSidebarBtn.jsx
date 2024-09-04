import { useDispatch } from 'react-redux';
import { toggleSidebar } from './sidebarSlice';
import Button from '../../ui/Button';
import { PiSidebar } from 'react-icons/pi';

function ToggleSidebarBtn({ type }) {
  const dispatch = useDispatch();

  return (
    <Button
      className='rounded px-2 py-1 text-2xl text-neutral-100 transition-all hover:bg-neutral-700'
      onClick={e => {
        e.stopPropagation();
        dispatch(toggleSidebar());
      }}
    >
      <PiSidebar />
    </Button>
  );
}

export default ToggleSidebarBtn;
