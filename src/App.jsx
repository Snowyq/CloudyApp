import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { WEATHER_API_KEY } from './config';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Home from './ui/Home';
import AppStart from './ui/AppStart';
import Weather, { loader as weatherLoader } from './features/weather/Weather';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    element: <AppLayout />,
    // errorElement: <Error />,

    children: [
      {
        path: '/app',
        element: <AppStart />,
      },
      {
        path: '/app/weather/current/:locationName/:locationId',
        element: <Weather />,
        loader: weatherLoader,
      },
      // {
      //   path: '/order/new',
      //   element: <CreateOrder />,
      //   action: createOrderAction,
      // },
      // {
      //   path: '/order/:orderId',
      //   element: <Order />,
      //   loader: orderLoader,
      //   action: updateOrderAction,
      //   errorElement: <Error />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// useEffect(function () {
// async function load() {
//   const { latitude, longitude } = await fetchPosition();
//   console.log(latitude, longitude);

//   const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`;
//   const res = await fetch(URL);
//   const data = await res.json();
//   console.log(data);
// }
// load();
// }, []);
