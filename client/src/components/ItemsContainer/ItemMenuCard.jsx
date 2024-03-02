import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { RiStarSFill, RiLoopRightFill } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import Box from '@mui/material/Box';

// useNavigate
import { useNavigate } from 'react-router-dom';

{/* <ItemMenuCard key={product.id} name={product.name} image_files={product.image_files} price={product.price} quantity_desc={product.quantity_desc}  /> */}


export default function ItemMenuCard( {product_id, name, image_files, price, quantity_desc, seller_id,setCart,cart }) {
    
    let pic = image_files[0]

    const navigate = useNavigate();

    let cartItem = [
        {product_id : product_id,
        name : name,
        image : image_files[0],
        price : price,
        quantity_desc : quantity_desc,
        seller_id: seller_id,
        amount: 1}
    ]


    const handleItemClick = () => {
        navigate('/item', { state: {product_id, name, image_files, price, quantity_desc, seller_id} });
    }


    return (
        <Box className="w-52 h-[400px] flex-shrink-0 flex flex-col ">

            <div id="gateway" onClick={handleItemClick}>
                {/* this is inner div1, for the picture */}    
                {/* Picture section - 40% */}
                <div className="w-full h-[200px] flex-grow-0 flex-shrink-0">
                    <img src={pic} className="w-full h-full object-fill rounded-lg"/>
                </div>


                {/* this is inner div2, rating maybe */}    
                {/* Rating section - occupying ~5% */}
                <div className="flex-grow-0 flex-shrink-0" >
                    <div className="flex items-center py-0">
                        <RiStarSFill style={{color: "yellow"}}/>
                        <RiStarSFill style={{color: "yellow"}}/>
                        <RiStarSFill style={{color: "yellow"}}/>
                        <RiStarSFill style={{color: "yellow"}}/>
                        <RiStarSFill style={{color: "gray"}}/>
                        <p className="text-gray-400 text-xs pl-2 font-medium">1111</p>
                    </div>
                    {/* <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-100 shadow-md relative cursor-pointer" style={{bottom: '12px', left: '40px'}}> 
                        <FaRegHeart size={"1.25rem"}/> 
                    </div> */}
                </div>


                {/* this is inner div2, rating maybe */}    
                {/* Name, description etc. - 10%, Need to test this out with actual data and adjust later */}
                <span className="flex-grow-0 flex-shrink-0 font-bold text-black my-4 h-6" >
                    {name}
                </span>

                {/* Other details (15% ---- 3, 5%, quantity, farmers name and price) */}
                <div className="flex flex-col flex-grow-0 flex-shrink-0" >
                    <span className="font-medium text-xs py-0">{quantity_desc}</span>
                    <span className="font-medium text-xs py-0">by Farmer Name</span>
                    <span className="font-medium text-md py-4 mt-auto">${price}</span>
                </div>
            </div>


            {/* Aesthetic Span ---- Lets try this one and see, Empty span - 10% */}
            <span className="flex-grow-0 flex-shrink-0" ></span>

            {/* Buttons, maybe first button add to cart, second button autoship, check Tri's color scheme and edit - 20% */}
            <div className="mt-auto text-sm font-semibold flex-grow-0 flex-shrink-0" >
                <p className="w-full bg-yellow my-2 cursor-pointer text-center transition-all rounded-lg py-2 flex items-center justify-center gap-2"
                onClick={()=>setCart([...cart,cartItem])}
                >Add To Cart <BsCart2 size={"1.1rem"}/> </p>
                {/* <p className="w-full bg-honey my-2 cursor-pointer text-center transition-all rounded-lg py-2 flex items-center justify-center gap-2"><RiLoopRightFill size={"1.1rem"}/>Autoship</p> */}
            </div>
        
        </Box>
    )
}
