import React, {useState, useEffect} from "react"

import ShopNav from "./ShopNav"
import ShopFilter from "./ShopFilter"
import ItemsContainer from "../ItemsContainer/ItemsContainer"
import MenuSelectorMain from "../MenuSelectors/MenuSelectorMain"

export default function ShopMain({cart, setCart}){

    const [data, setData] = useState([])

    // filter for main category
    const [mainCategory, setMainCategory] = useState("")

    // filter for subcategory
    const [subCategory, setSubCategory] = useState("")

    useEffect( () => {
        fetch("http://127.0.0.1:5555/products")
        .then((response) => response.json())
        .then((file) => setData(file))
    }, []) 
    


    return (
        
        <>
        {/* <ShopNav /> */}
        <div className="min-h-screen w-full bg-gray-200 relative">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <MenuSelectorMain setMainCategory = {setMainCategory} setSubCategory = {setSubCategory} mainCategory={mainCategory} subCategory={subCategory}/>
            <ItemsContainer data={data} mainCategory={mainCategory} subCategory={subCategory} setMainCategory={setMainCategory} setSubCategory={setSubCategory} setCart={setCart} cart={cart}/>

        </div>
        </>
    )
}

