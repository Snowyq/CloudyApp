import { useSelector } from 'react-redux';

function AppContainer({ children, onClick }) {
  const showSidebar = useSelector(state => state.sidebar.showSidebar);

  return (
    <div
      className={`z-50 h-full w-full ${showSidebar ? 'lg:ml-[300px]' : 'lg:ml-0'} relative bg-inherit bg-neutral-800 transition-all`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default AppContainer;
