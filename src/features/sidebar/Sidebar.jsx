import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from './sidebarSlice';
import Button from '../../ui/Button';
import ToggleSidebarBtn from './ToggleSidebarBtn';
import { FaLocationDot } from 'react-icons/fa6';

function Sidebar() {
  const showSidebar = useSelector(state => state.sidebar.showSidebar);

  return (
    <div
      className={`${showSidebar ? 'transalte-x-0' : '-translate-x-[100%]'} fixed bottom-0 left-0 top-0 z-[100] flex h-full w-[300px] transform flex-col bg-neutral-900 px-5 transition-all lg:z-[0] lg:transform-none`}
    >
      {/* bar */}
      <div className='z-10 flex h-[50px] items-center'>
        {showSidebar && <ToggleSidebarBtn />}
      </div>

      {/* main */}
      <div className='flex w-fit items-center gap-1 rounded-full bg-neutral-700 px-2 py-1'>
        <FaLocationDot />
        <p>Locations</p>
      </div>
    </div>
  );
}

export default Sidebar;
