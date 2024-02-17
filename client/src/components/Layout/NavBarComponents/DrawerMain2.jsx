import { BsCart2 } from "react-icons/bs";
import CartItem from "../CartItem";
import { BsFillBasket3Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function DrawerMain2({cart}){

    let nav = useNavigate()

    return(
    <div className="drawer-side z-50 no-scrollbar">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-0 w-[25%] min-h-full bg-white">
            {/* Sidebar content here */}
            <p className="h-16 w-full bg-yellow flex justify-center items-center text-xl gap-4">Your Basket <BsFillBasket3Fill /></p>
            {cart.map(i => <CartItem item={i}/>)}
            
            <div className="mt-auto p-4 sticky bottom-0 bg-white">
                <button className="w-full px-4 py-3 bg-black uppercase text-white rounded-md hover:bg-olive transition-all" onClick={()=>nav('/checkout')}>Checkout</button>
            </div>

        </ul>
    </div>
    )
}