import { useState } from "react"

export default function SubNav({setDisplay,setSub}){

    let categories = [
        "Bees N Bread Specials",
        "Holiday & More",
        "New",
        "Meat & Seafood",
        "Pantry",
        "Snacks, Bars & Treats",
        "Beverages",
        "Frozen",
        "Wine",
        "Babies & Kids",
        "Health",
        "Personal Care",
        "Household",
        "Pet",
        "Exclusives",
        "Gifts"
    ]

    function onClick(){
        setSub(true)
        setDisplay(false)
    }


    return(
        <div className="h-10 flex justify-evenly px-12 gap-4 shadow-md bg-white items-center relative">
            {categories.map(cat => 
                <label className="group relative h-full flex items-center" htmlFor="my-drawer" key={cat} onClick={onClick}>
                    <p className="cursor-pointer text-sm font-semibold group-hover:text-olive " key={cat + "p"}>{cat}</p>
                    <p className="h-[2px] bg-olive w-full bottom-0 absolute hidden group-hover:block"></p>
                </label>
            )}
        </div>
    )
}