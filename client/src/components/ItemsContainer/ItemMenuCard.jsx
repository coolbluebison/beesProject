import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { RiStarSFill, RiLoopRightFill } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import Box from '@mui/material/Box';

export default function ItemMenuCard() {
    let pic = "https://m.media-amazon.com/images/I/81-u4+thvvL._SX679_.jpg"

    return (
        <Box className="min-w-60 min-h-200 flex-shrink-0 flex flex-col">

            {/* this is inner div1, for the picture */}    
            {/* Picture section - 40% */}
            <div className="w-full flex-grow-0 flex-shrink-0" style={{ flexBasis: '40%' }}>
                <img src={pic} className="w-full h-full object-fill"/>
            </div>


            {/* this is inner div2, rating maybe */}    
            {/* Rating section - occupying ~5% */}
            <div className="flex-grow-0 flex-shrink-0" style={{ flexBasis: '5%' }}>
                <div className="flex items-center py-2">
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
            <span className="flex-grow-0 flex-shrink-0 font-bold text-black text-md py-2" style={{ flexBasis: '10%' }}>
                Grocery Item
            </span>

            {/* Other details (15% ---- 3, 5%, quantity, farmers name and price) */}
            <div className="flex flex-col flex-grow-0 flex-shrink-0" style={{ flexBasis: '15%' }}>
                <span className="font-medium text-sm py-2">100 oz set</span>
                <span className="font-medium text-sm py-2">Farmer Name</span>
                <span className="font-medium text-sm py-2">$12.99</span>
            </div>

            {/* Aesthetic Span ---- Lets try this one and see, Empty span - 10% */}
            <span className="flex-grow-0 flex-shrink-0" style={{ flexBasis: '10%' }}></span>

            {/* Buttons, maybe first button add to cart, second button autoship, check Tri's color scheme and edit - 20% */}
            <div className="mt-auto text-sm font-semibold flex-grow-0 flex-shrink-0" style={{ flexBasis: '20%' }}>
                <p className="w-full bg-blue-500 my-2 cursor-pointer text-center transition-all hover:bg-blue-800 rounded-lg py-2 flex items-center justify-center gap-2">Add To Cart <BsCart2 size={"1.1rem"}/> </p>
                <p className="w-full bg-blue-400 my-2 cursor-pointer text-center transition-all hover:bg-blue-800 rounded-lg py-2 flex items-center justify-center gap-2"><RiLoopRightFill size={"1.1rem"}/>Autoship</p>
            </div>
        
        </Box>
    )
}
