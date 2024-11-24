import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import Shop from './Pages/Shop';
import Sproduct from './Pages/Sproduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Blog",
    element: <Blog />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/Shop",
    element: <Shop />,
  },
  {
    path: "/Sproduct",
    element: <Sproduct />,
  },
 
]);

const App = () => {
  return <RouterProvider  
  
  // future={{ 
  //   v7_startTransition: true,  // Optional: Enables transition optimization
  //   v7_normalizeFormMethod: true, // Enable formMethod normalization
  // }}
  router={router} />;
};

export default App;
