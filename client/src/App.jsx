import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { useState,useEffect } from 'react';


// import Banner from "./components/LandingPage_components/Banner"
// import Carousel from "./components/LandingPage_components/Carosel"
// import GroceryNav from "./components/LandingPage_components/GroceryNav"
import LandingPage from './components/LandingPageComponents/LandingPage';

import IndividualItem from "./components/IndividualItemComponents/IndividualItem"

import Rootlayout from './components/Layout/Rootlayout';

import Deals from './components/DealsPage/Deals';

import Login from './components/LoginSignup/Login';

import ShopMain from './components/Shop/ShopMain';

import Checkout from './components/Checkout/Checkout';





function App() {

  const [user,setUser] = useState(null)

  let [cart,setCart] = useState([])

  let [cart2,setCart2] = useState([])

  // useEffect(()=>{
  //   fetch('http://127.0.0.1:5555/check_session')
  //   .then(response => response.json())
  //   .then(data => {
  //     if (data.username){
  //       setUser(data)
  //     }}
  //     )
  // },[])


  useEffect(()=>{
    fetch ('http://127.0.0.1:5555/carts/1')
    .then ( response => response.json())
    .then ( data => {
        console.log(data)
        setCart2(data)
      }
      )
  
    },[])


  console.log(user)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout cart={cart}/>}>
        <Route index element= { <LandingPage /> } />
          <Route path="/item" element=  { <IndividualItem /> } />
          <Route path="/deals" element= { <Deals /> } />
          <Route path='/login' element= { <Login setUser={setUser}/>} />
          <Route path='/shop' element=  { <ShopMain cart={cart2} setCart={setCart2}/>} />
          <Route path='/checkout' element= {<Checkout cart={cart} setCart={setCart}/>} />
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
