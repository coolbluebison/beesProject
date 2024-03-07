import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Banner from "./Banner";
import NavBar from "./Navbar";

export default function Rootlayout({cart,user,setUser}){

    const nav = useLocation()

    return(
        <>
        {nav.pathname !== '/login' ? <Banner /> : null }
        {nav.pathname !== '/login' ? <NavBar cart={cart} user={user} setUser={setUser}/> : null }
        <Outlet />
        {nav.pathname !== '/login'? <Footer /> : null }
        </>
    )
}