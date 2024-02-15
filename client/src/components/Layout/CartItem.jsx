import { useState } from "react"

export default function CartItem({item}){

    let i = item[0]
    let [amount,setAmount] = useState(1)

    return(
        <>
        <div className="w-full flex justify-evenly gap-4 h-20 mt-4 ">
            <img src={i.image} alt={i.name} className=" h-20 w-20  border-[1px] border-honey rounded-sm"/>
            <div className="w-1/3 ">
                <p className="text-sm truncate">{i.name}</p>
                <p className="text-xs text-olive">Size: {i.quantity_desc}</p>
                <p className="pt-4 text-sm">
                    <span className="px-2 cursor-pointer" onClick={()=>setAmount(amount-1)}>-</span>
                    {amount}
                    <span className="px-2 cursor-pointer" onClick={()=>setAmount(amount+1)}>+</span>
                </p>
            </div>
            <div>
                <p>${i.price}</p>
                <p className="mt-8 text-sm underline cursor-pointer">Remove</p>
            </div>

        </div>
        <p className="w-full h-[1px] bg-honey mt-4"></p>
        </>
    )
}