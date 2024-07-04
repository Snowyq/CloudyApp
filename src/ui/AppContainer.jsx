import { useSelector } from 'react-redux';

function AppContainer({ children }) {
  const showSidebar = useSelector(state => state.sidebar.showSidebar);

  return (
    <div
      className={`z-50 h-full w-full ${showSidebar ? 'lg:ml-[300px]' : 'lg:ml-0'} bg-inherit transition-all`}
    >
      {children}
    </div>
  );
}

export default AppContainer;
