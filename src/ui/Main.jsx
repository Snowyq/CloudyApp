// import { useSelector } from 'react-redux';

function Main({ children }) {
  // const showSidebar = useSelector(state => state.sidebar.showSidebar);

  return (
    // <main className={`${showSidebar ? 'w-[calc(100%-300px)]' : 'w-full'}`}>
    <main>{children}</main>
  );
}

export default Main;

{
  /* <main
className={`${className} ${displayControl} col-span-full h-full bg-yellow-200 transition-all`}
>
{children}
</main> */
}
