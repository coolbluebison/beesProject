import { useState } from "react"

export default function SubNav({setDisplay,setSub,setSubMenu,subMenu}){

    let categories = [
        "Bees In Baskets Specials",
        "New",
        "Meat & Seafood",
        "Dairy & Eggs",
        "Pantry & Staples",
        "Baked Goods",
        "Snacks & Bars",
        "Coffee",
        "Beverages",
        "Babies & Kids",
        "Personal Care",
        "Pets",
        "Household"
    ]

    // function onClick(){
    //     setSub(true)
    //     setDisplay(false)
    // }


    return(
        <div className="h-10 flex justify-evenly px-12 gap-4 shadow-md bg-white items-center relative">
            {categories.map(cat => 
                <label className="group relative h-full flex items-center" htmlFor="my-drawer" key={cat} onClick={()=>setSubMenu(!subMenu)}>
                    <p className="cursor-pointer text-sm font-semibold group-hover:text-olive " key={cat + "p"}>{cat}</p>
                    <p className="h-[2px] bg-olive w-full bottom-0 absolute hidden group-hover:block"></p>
                </label>
            )}
        </div>
    )
}