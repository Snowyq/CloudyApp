import { useSelector } from 'react-redux';
import SearchLocation from '../features/search/SearchLocation';
import ToggleSidebarBtn from '../features/sidebar/ToggleSidebarBtn';
import { getShowSidebar } from '../features/sidebar/sidebarSlice';

function Header() {
  const showSidebar = useSelector(getShowSidebar);

  return (
    <header
      className={`${showSidebar ? 'lg:ml-[300px]' : 'lg:ml-0'} fixed left-0 right-0 top-0 z-[1000] flex h-[50px] items-center justify-between bg-inherit px-5 transition-all`}
    >
      {showSidebar || <ToggleSidebarBtn />}

      <div className='translate absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform'>
        <SearchLocation />
      </div>
    </header>
  );
}

export default Header;
