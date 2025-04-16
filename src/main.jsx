import { Suspense, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Error from './Error.jsx';
import Body from './Body.jsx';
import RestaurantMenu from './RestaurantMenu.jsx';
import { Provider } from "react-redux";
import appStore from './utils/appStore.js';
import Cart from './Cart.jsx';
import RestaurantCollectionsInfo from './RestaurantCollectionsInfo.jsx'; // <-- ✅ new import


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'restaurants/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: 'collections/:resId', // ✅ new route for collection info
        element: <RestaurantCollectionsInfo />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
