import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../features/sidebar/sidebarSlice';
import Button from './Button';
import SearchLocation from './SearchLocation';
import Time from './Time';

function Header() {
  const dispatch = useDispatch();
  const showSidebar = useSelector(state => state.sidebar.showSidebar);

  return (
    <header className='relative flex h-[100px] items-center justify-between bg-inherit px-5'>
      <Button onClick={() => dispatch(toggleSidebar())}>openSidebar</Button>

      <div className='translate absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform'>
        <SearchLocation />
      </div>

      <p>{showSidebar}</p>
      <Time />
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
