import { IoMdHome } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import ShopFilter from "./ShopFilter";

export default function ShopNav(){
    return(
        <div className="w-full py-6 flex items-center text-black gap-2 px-40 pt-48 bg-white sticky top-0 z-30">
            <p><IoMdHome size={"1.25rem"}/></p>
            <p className="hover:underline cursor-pointer">Home</p>
            <p><FaChevronRight /></p>
            <p className="hover:underline cursor-pointer">Category</p>
            <p><FaChevronRight /></p>
            <p className="hover:underline cursor-pointer">Sub Category</p>

            <p className="ml-auto flex items-center gap-2 cursor-pointer">Filter By<CiMenuBurger /></p>
            {/* <ShopFilter /> */}
        </div>
    )
}