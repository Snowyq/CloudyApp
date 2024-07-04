import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from './sidebarSlice';
import Button from '../../ui/Button';

function Sidebar() {
  const dispatch = useDispatch();
  const showSidebar = useSelector(state => state.sidebar.showSidebar);

  return (
    <div
      className={`${showSidebar ? 'translate-x-0' : '-translate-x-[100%]'} absolute z-[100] h-full w-[300px] transform bg-neutral-900 transition-all lg:z-0 lg:transform-none 2xl:rounded-l-lg`}
    >
      <div className='flex h-[100px] items-center px-5'>
        <Button onClick={() => dispatch(toggleSidebar())}>openSidebar</Button>
      </div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae sit,
      neque perspiciatis dolorum asperiores ipsa tenetur ratione culpa doloribus
      molestias vitae dolorem. Ratione ad esse laborum id! Saepe, molestias
      delectus.
    </div>
  );
}

export default Sidebar;
