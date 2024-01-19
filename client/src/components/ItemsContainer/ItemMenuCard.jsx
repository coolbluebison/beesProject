import { FaRegHeart } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { RiLoopRightFill } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";

export default function ItemMenuCard(){

    let pic = "https://m.media-amazon.com/images/I/81-u4+thvvL._SX679_.jpg"

    return(
       
        <div className="min-w-60 min-h-160 flex-shrink-0">
            
            {/* this is inner div1, for the picture */}
            <div className="w-full h-40" >
                <img src={pic} className="w-full h-20 object-fill"/>
                <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-100 shadow-md relative cursor-pointer bottom-12 left-40"> <FaRegHeart size={"1.25rem"}/> </div>
            </div>

            {/* put div2 here- */}
            {/* 1st portion, contains rating- */}
            {/* 2nd portion, contains name, description of product- */}
            {/* 3rd portion, contains farmer name- */}
            {/* 4th portion, contains unit of sell- */}
            {/* 4th portion, contains price- */}


            <div className="flex">
                <div className="flex items-center py-2">
                    <RiStarSFill style={{color: "yellow"}}/>
                    <RiStarSFill style={{color: "yellow"}}/>
                    <RiStarSFill style={{color: "yellow"}}/>
                    <RiStarSFill style={{color: "yellow"}}/>
                    <RiStarSFill style={{color: "gray"}}/>
                    <p className="text-gray-400 text-xs pl-2 font-medium">1111</p>
                </div>
            </div>
            <p className="font-semibold text-black text-sm py-2">Grocery Item</p>
            <p className="font-medium text-white text-sm py-2">100 oz set</p>
            <div className="mt-auto text-sm font-semibold">
                <p className="w-full bg-blue-500 my-2 cursor-pointer text-center transition-all hover:bg-blue-800 rounded-lg py-2 flex items-center justify-center gap-2">Add To Cart <BsCart2 size={"1.1rem"}/> </p>
                <p className="w-full bg-blue-400 my-2 cursor-pointer text-center transition-all hover:bg-blue-800 rounded-lg py-2 flex items-center justify-center gap-2"><RiLoopRightFill size={"1.1rem"}/>Autoship</p>
            </div>
        </div>
      
    )
}