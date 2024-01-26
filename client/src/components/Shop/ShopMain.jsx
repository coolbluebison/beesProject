import React, {useState, useEffect} from "react"

import ShopNav from "./ShopNav"
import ShopFilter from "./ShopFilter"
import ItemsContainer from "../ItemsContainer/ItemsContainer"

export default function ShopMain(){

    const [data, setData] = useState([])

    useEffect( () => {
        fetch("http://127.0.0.1:5555/products")
        .then((response) => response.json())
        .then((file) => setData(file))
    }, []) 
    

    return (
        
        <>
        {/* <ShopNav /> */}
        <div className="min-h-screen w-full bg-white">
        <ShopNav />
        <div className="h-screen w-full bg-gray-200 relative px-40">
            {/* <ShopFilter /> */}
            <ItemsContainer data={data} />

        </div>
        </>
    )
}

