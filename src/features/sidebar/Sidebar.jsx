import { useSelector } from 'react-redux';
import { getShowSidebar } from './sidebarSlice';

import Locations from '../locations/Locations';
import ToggleSidebarBtn from './ToggleSidebarBtn';

function Sidebar() {
  const showSidebar = useSelector(getShowSidebar);

  return (
    <div
      className={`${showSidebar ? 'translate-x-0' : '-translate-x-[100%]'} fixed bottom-0 left-0 top-0 z-[100] flex h-full w-[300px] transform flex-col bg-neutral-900 px-2 transition-all lg:z-[0] lg:transform-none`}
    >
      <div className='z-10 flex h-[50px] items-center px-3'>
        {showSidebar && <ToggleSidebarBtn />}
      </div>
      <Locations />
    </div>
  );
}

export default Sidebar;
