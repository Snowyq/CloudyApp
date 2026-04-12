import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Sidebar from '../features/sidebar/Sidebar';
import { closeSidebar } from '../features/sidebar/sidebarSlice';
import AppContainer from './AppContainer';
import Header from './Header';
import Main from './Main';

function AppLayout() {
  const dispatch = useDispatch();

  function handleClickOutsideSidebar() {
    dispatch(closeSidebar());
  }

  return (
    <div className='bg-neutral-800 text-neutral-100'>
      <div
        className='scroll relative flex h-svh w-full overflow-y-scroll bg-inherit'
        style={{ scrollbarColor: '#737373 #262626' }}
      >
        <Sidebar />
        <Toaster
          position='bottom-center'
          toastOptions={{
            style: {
            },
          }}
        />
        <AppContainer onClick={handleClickOutsideSidebar}>
          <Header />
          <Main>
            <Outlet />
          </Main>
        </AppContainer>
      </div>
    </div>
  );
}

export default AppLayout;
