import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Weather, { loader as weatherLoader } from './features/weather/Weather';
import AppLayout from './ui/AppLayout';
import AppStart from './ui/AppStart';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <AppStart />,
      },
      {
        path: '/app/weather/current/:locationId',
        element: <Weather />,
        loader: weatherLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
