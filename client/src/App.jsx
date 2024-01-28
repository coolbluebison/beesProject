import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { useState } from 'react';


// import Banner from "./components/LandingPage_components/Banner"
// import Carousel from "./components/LandingPage_components/Carosel"
// import GroceryNav from "./components/LandingPage_components/GroceryNav"
import LandingPage from './components/LandingPageComponents/LandingPage';

import IndividualItem from "./components/IndividualItemComponents/IndividualItem"

import Rootlayout from './components/Layout/Rootlayout';

import Deals from './components/DealsPage/Deals';

import Login from './components/LoginSignup/Login';

import ShopMain from './components/Shop/ShopMain';





function App() {

  let [cart,setCart] = useState([])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout cart={cart}/>}>
        <Route index element= { <LandingPage /> } />
          <Route path="/item" element=  { <IndividualItem /> } />
          <Route path="/deals" element= { <Deals /> } />
          <Route path='/login' element= { <Login />} />
          <Route path='/shop' element=  { <ShopMain cart={cart} setCart={setCart}/>} />
      </Route>
    )
  )


  return (
    <div className='bg-white text-black font-lato'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
