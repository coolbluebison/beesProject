import { BsCart2 } from "react-icons/bs";

export default function DrawerMain2({cart}){

    console.log(cart)

    return(
    <div className="drawer-side z-50 no-scrollbar">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-0 w-80 min-h-full bg-white">
            {/* Sidebar content here */}
            <p className="h-16 w-full bg-yellow flex justify-center items-center text-xl gap-4">Your Cart <BsCart2 /></p>
            
            <div className="mt-auto p-4">
                <button className="w-full px-4 py-3 bg-black uppercase text-white rounded-full hover:bg-olive transition-all">Checkout</button>
            </div>

        </ul>
    </div>
    )
}