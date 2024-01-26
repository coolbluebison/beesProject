import { useState,useEffect } from "react";

// component imports
// import DrawerMain from "./NavBarComponents/Drawer"
import Banner from "./NavBarComponents/Banner"
import SubNav from "./NavBarComponents/SubNav"
// import CartNav from "./NavBarComponents/CartNav";
// import AutoshipNav from "./NavBarComponents/AutoshipNav";
// import Checkout from "../Checkout/Checkout";
import ProfileNav from "./NavBarComponents/ProfileNav";

// icon imports
import { CiMenuBurger } from "react-icons/ci";
// import { CiRedo } from "react-icons/ci";
// import { IoPricetagOutline } from "react-icons/io5";
// import { RiLoopRightFill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { BsCart2 } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";

import DrawerMain2 from "./NavBarComponents/DrawerMain2";



export default function NavBar(){

    let [hidden,setHidden] = useState(false)

    var prevScrollpos = window.scrollY;
    window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        setHidden(false)
    } else if (drawer){
        setHidden(false)
    } else {
        setHidden(true)
    }
    prevScrollpos = currentScrollPos;
    }
    

    let [drawer,setDrawer] = useState(false)

    

    // let [cartHover,setCartHover] = useState(false)
    // let [cartDisplay,setCartDisplay] = useState(false)

    let [ASHover,setASHover] = useState(false)
    let [ASDisplay,setASDisplay] = useState(false)

    let [pHover,setPHover] = useState(false)
    let [pDisplay,setPDisplay] = useState(false)


    // useEffect(()=>{

    //     const timeout = setTimeout(()=>{
    //         setCartDisplay(cartHover)
    //       },100)
      
    //       return () => clearTimeout(timeout)

    // },[cartHover])

    useEffect(()=>{

        const timeout = setTimeout(()=>{
            setPDisplay(pHover)
          },100)
      
          return () => clearTimeout(timeout)

    },[pHover])


    useEffect(()=>{

        const timeout = setTimeout(()=>{
            setASDisplay(ASHover)
          },100)
      
          return () => clearTimeout(timeout)

},[ASHover])

    let [cart,setCart] = useState(false)

    let [sub,setSub] = useState(false)
    let [display,setDisplay] = useState(true)
    

    return(
        <>
        <nav className={hidden ? "-translate-y-40 top-0 fixed transition-all duration-300 w-screen " : "top-0 transition-all duration-300 fixed z-50 w-screen font-lato"}>
            <Banner />
            <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" onChange={()=>setDrawer(!drawer)}/>
                <div className="drawer-content">
                    
                    <div className="w-full bg-[#fff3b2] h-[4.5rem] flex items-center justify-between px-10 shadow-sm" >
                        <div className="flex items-center w-[20%] justify-evenly">
                        <p className="text-2xl font-bold text-black cursor-pointer">LOGO</p>
                            <label className="text-2xl font-semibold text-gray-800 cursor-pointer flex items-center gap-2"><CiMenuBurger size={"1.5rem"}/>Menu</label>
                            {/* <label className="text-2xl font-semibold text-gray-800 cursor-pointer flex items-center gap-2"><CiRedo size={"1.5rem"}/> Buy It Again</label> */}
                            {/* <label className="text-2xl font-semibold text-gray-800 cursor-pointer flex items-center gap-2"><IoPricetagOutline size={"1.5rem"}/>Deals</label> */}
                            {/* <label className="text-2xl font-semibold text-gray-800 cursor-pointer flex items-center gap-2" onMouseOver={()=>{setASHover(true)}} onMouseLeave={()=>{setASHover(false)}}><RiLoopRightFill size={"1.5rem"}/> Autoship</label> */}
                            {/* <label className="text-lg underline font-semibold text-gray-700 cursor-pointer">Get 15% Off</label> */}

                        </div>
                        <div className="flex justify-between gap-4 w-full items-center">
                            <div className="w-[85%] flex bg-white rounded-md h-12 items-center px-4 shadow-md ">
                                <IoSearchOutline size={"1.5rem"}/>
                                <input className="w-full h-10 bg-white outline-none mx-4 text-gray-800" placeholder="Search..."></input>
                            </div>
                        <div className="flex w-[20%] justify-evenly">
                            <span className="h-12 w-12 bg-white rounded-full hover:scale-110 transition-all duration-200 items-center flex justify-center text-gray-700 shadow-md"><RxAvatar size={"2rem"} onMouseOver={()=>setPHover(true)} onMouseLeave={()=>{setPHover(false)}}/></span>
                            <label className="h-12 w-12 bg-white rounded-full hover:scale-110 transition-all duration-200 items-center flex justify-center text-gray-700 shadow-md hover:bg-green-200"
                            htmlFor="my-drawer-4"
                            >{cart ? <IoCloseOutline size={"2rem"}/>: <BsCart2 size={"2rem"}/> }</label>
                        </div>
                        </div>
                        
                    </div>
                    
                </div> 
                <DrawerMain2 />
                {/* <DrawerMain setSub={setSub} sub={sub} setDisplay={setDisplay} display={display}/> */}
            </div>
            
            {/* <AutoshipNav ASDisplay={ASDisplay} setASHover={setASHover}/> */}
            {/* <CartNav cartHover={cartDisplay} setCartHover={setCartHover}/> */}
            <ProfileNav pHover={pDisplay} setPHover={setPHover}/>
            <SubNav setSub={setSub} setDisplay={setDisplay}/>
            {/* <Checkout cart={cart} /> */}
        </nav>
        </>
    )
}