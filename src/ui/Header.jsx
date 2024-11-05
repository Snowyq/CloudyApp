import { useSelector } from 'react-redux';
import SearchLocation from '../features/search/SearchLocation';
import ToggleSidebarBtn from '../features/sidebar/ToggleSidebarBtn';

function Header() {
  const showSidebar = useSelector(state => state.sidebar.showSidebar);

  return (
    <header
      className={`${showSidebar ? 'lg:ml-[300px]' : 'lg:ml-0'} fixed left-0 right-0 top-0 z-[1000] flex h-[50px] items-center justify-between bg-inherit px-5 transition-all`}
    >
      {showSidebar || <ToggleSidebarBtn />}

      <div className='translate absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform'>
        <SearchLocation />
      </div>

      {/* <p>{showSidebar}</p> */}
      {/* <Time /> */}
    </header>
  );
}

export default Header;

// return (
//   <header className='z-[1000] col-span-full row-span-1 flex flex-row items-center gap-2 bg-yellow-50'>
//     <Button onClick={() => dispatch(toggleSidebar())}>openSidebar</Button>
//     <p>Logo</p>
//     <SearchLocation />
//   </header>
// );
// }
