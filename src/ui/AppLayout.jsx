import { Outlet } from 'react-router-dom';
import Sidebar from '../features/sidebar/Sidebar';
import Header from './Header';
import Main from './Main';
import AppContainer from './AppContainer';

function AppLayout() {
  return (
    <div className='bg-neutral-800 text-neutral-100'>
      <div
        className='scroll relative flex h-svh w-full overflow-y-scroll bg-inherit'
        style={{ scrollbarColor: '#737373 #262626' }}
      >
        <Sidebar />
        <AppContainer>
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

// function AppLayout() {
//   return (
//     <div className='relative mx-auto grid h-svh max-w-screen-2xl grid-rows-[100px_1fr] bg-zinc-800 text-slate-500'>
//       <Header />

//       <div className='mx-auto h-full w-full md:grid md:grid-cols-[minmax(300px,400px)_auto]'>
//         <Sidebar />

//         <Main>
//           <Outlet />
//         </Main>
//       </div>
//     </div>
//   );
// }

// export default AppLayout;
