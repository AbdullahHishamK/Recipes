import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import All from './components/All/All';
import Beef from './components/Beef/Beef';
import BreakFast from './components/BreakFast/BreakFast';
import Chicken from './components/Chicken/Chicken';
import Dessert from './components/Dessert/Dessert';
import Goat from './components/Goat/Goat';
import Lamb from './components/Lamb/Lamb';
import Miscellaneous from './components/Miscellaneous/Miscellaneous';
import Pasta from './components/Pasta/Pasta';
import Pork from './components/Pork/Pork';
import Seafood from './components/Seafood/Seafood';
import Side from './components/Side/Side';
import Starter from './components/Starter/Starter';
import Vegan from './components/Vegan/Vegan';
import Vegeterian from './components/vegeterian/Vegeterian';
import Details from './components/details/Details';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Navigate to="/home" /> }, // Redirect to Home
      {
        path: 'home',
        element: <Home />,
        children: [
          { path: '', element: <All /> },
          { path: 'all/:idMeal', element: <All /> },
          { path: 'details/:idMeal', element: <Details /> },
          { path: 'beef', element: <Beef /> },
          { path: 'beef/details/:idMeal', element: <Details /> },
          { path: 'breakfast', element: <BreakFast /> },
          { path: 'breakfast/details/:idMeal', element: <Details /> },
          { path: 'chicken', element: <Chicken /> },
          { path: 'chicken/details/:idMeal', element: <Details /> },
          { path: 'dessert', element: <Dessert /> },
          { path: 'dessert/details/:idMeal', element: <Details /> },
          { path: 'goat', element: <Goat /> },
          { path: 'goat/details/:idMeal', element: <Details /> },
          { path: 'lamb', element: <Lamb /> },
          { path: 'lamb/details/:idMeal', element: <Details /> },
          { path: 'miscellaneous', element: <Miscellaneous /> },
          { path: 'miscellaneous/details/:idMeal', element: <Details /> },
          { path: 'pasta', element: <Pasta /> },
          { path: 'pasta/details/:idMeal', element: <Details /> },
          { path: 'pork', element: <Pork /> },
          { path: 'pork/details/:idMeal', element: <Details /> },
          { path: 'seafood', element: <Seafood /> },
          { path: 'seafood/details/:idMeal', element: <Details /> },
          { path: 'side', element: <Side /> },
          { path: 'side/details/:idMeal', element: <Details /> },
          { path: 'starter', element: <Starter /> },
          { path: 'starter/details/:idMeal', element: <Details /> },
          { path: 'vegan', element: <Vegan /> },
          { path: 'vegan/details/:idMeal', element: <Details /> },
          { path: 'vegetarian', element: <Vegeterian /> },
          { path: 'vegetarian/details/:idMeal', element: <Details /> },
        ],
      },
      { path: 'details/:idMeal', element: <Details /> }, // Details route as a sibling
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;