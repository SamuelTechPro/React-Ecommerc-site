

import React from 'react';

import './App.css';
import Home from './pages/Home';
import Favourites from "./pages/Favourite";
import Order from './pages/Order';
import Cart from './pages/Cart';

// side bar
import Sidebar from './Components/Sidebar';



 // react router dom
  import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Outlet,
    Route
  } from 'react-router-dom'
import Favourite from './pages/Favourite';


function App() {
  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Root />}>
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favs' element={<Favourite />} />
          <Route path='/orders' element={<Order />} />
        </Route>
      )
  )
  return (
    <div className='App'>
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
const Root =() => {
  return(
    <>
    <div>
      <Sidebar />
    </div>
    <div>
      <Outlet />
    </div>
    </>

  )
}

