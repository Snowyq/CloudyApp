import { useSelector } from 'react-redux';

import ToggleSidebarBtn from './ToggleSidebarBtn';

import Locations from './Locations';

function Sidebar() {
  const showSidebar = useSelector(state => state.sidebar.showSidebar);

  return (
    <div
      className={`${showSidebar ? 'transalte-x-0' : '-translate-x-[100%]'} fixed bottom-0 left-0 top-0 z-[100] flex h-full w-[300px] transform flex-col bg-neutral-900 px-2 transition-all lg:z-[0] lg:transform-none`}
    >
      <div className='z-10 flex h-[50px] items-center px-3'>
        {showSidebar && <ToggleSidebarBtn />}
      </div>

      <Locations />
    </div>
  );
}

export default Sidebar;
