import CartItem from "../Layout/CartItem"
import { BsFillBasket3Fill } from "react-icons/bs";

export default function Checkout({cart,setCart}){

    console.log(cart)

    return(
        <div className="h-screen flex py-4 mx-60">
            <div className="w-3/5 bg-honey">qwer</div>
            <div className="w-2/5 h-full flex flex-col">
                <p className="h-16 w-full bg-yellow flex justify-center items-center text-xl gap-4">Your Basket <BsFillBasket3Fill /></p>
                {cart.map(i => <CartItem item={i}/>)}
                <div className=" p-4 mt-auto bg-white">
                    <div className="mb-4 bg-honey">
                        <p className="text-right px-4 text-sm">Retail: ${}</p>
                        <p className="text-right px-4 text-sm">Shipping: ${}</p>
                        <p className="text-right px-4 text-sm">Taxes ${}</p>
                        <p className="text-right px-4 font-bold">Total: ${}</p>
                    </div>
                    <button className="w-full px-4 py-3 bg-black uppercase text-white rounded-md hover:bg-olive transition-all">Checkout</button>
                </div>
            </div>
        </div>
    )
}