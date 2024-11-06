import { useSelector } from 'react-redux';
import { getShowSidebar } from '../features/sidebar/sidebarSlice';

function AppContainer({ children, onClick }) {
  const showSidebar = useSelector(getShowSidebar);

  return (
    <div
      className={`z-50 h-full w-full ${showSidebar ? 'lg:ml-[300px] lg:w-[calc(100%-300px)]' : 'lg:ml-0 lg:w-full'} relative bg-inherit bg-neutral-800 transition-all`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default AppContainer;
