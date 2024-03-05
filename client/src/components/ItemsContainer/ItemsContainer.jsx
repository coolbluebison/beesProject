import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ItemMenuCard from "./ItemMenuCard";
import ShopFilter from '../Shop/ShopFilter';
import { FaChevronRight } from "react-icons/fa";

function ItemsContainer( {data, mainCategory, subCategory, setCart,cart,setMainCategory,setSubCategory }) {


    // this is where to filter the data (in progress / later)
    // categories and sellers

    const filteredData = data.filter((item) => {
        // Filter by mainCategory 
        const mainCategoryMatch = mainCategory ? item.product_cat === mainCategory : true;
        // Filter by subCategory 
        const subCategoryMatch = subCategory ? item.sub_cat === subCategory : true;

        // console.log(`Item main_cat: ${item.product_cat}, Filter mainCategory: ${mainCategory}`);
        // console.log(`Item sub_cat: ${item.sub_cat}, Filter subCategory: ${subCategory}`);


        // console.log(mainCategoryMatch)
        // console.log(subCategoryMatch)
        return mainCategoryMatch && subCategoryMatch ; //
        
    });



    let filtered_data = filteredData

    function home(){
        setMainCategory("")
        setSubCategory("")
    }

    return (
        <div className='flex relative w-full'>
        <ShopFilter />
        <Box className="w-2/3" sx={{ flexGrow: 1, padding: '5%' }}>
            <div className='flex gap-3 underline text-sm z-40 mb-10 pl-12 items-center select-none'>
                <p className='cursor-pointer p-2' onClick={home}>All Products</p>
                {mainCategory !== "" ? <FaChevronRight /> : null}
                <p className='cursor-pointer p-2' onClick={()=>setSubCategory("")}>{mainCategory}</p>
                {subCategory !== "" ? <FaChevronRight /> : null}
                <p className='cursor-pointer p-2'>{subCategory}</p>
            </div>
           
            <Grid container spacing={6} className='pt-2 z-0'>
                
                {
                    filtered_data.map ( product => (
                        
                        <Grid item xs={3}>
                            
                            <ItemMenuCard 
                            key={product.id} product_id = {product.id} name={product.name}
                            image_files={JSON.parse(product.image_files)} price={product.price} 
                            quantity_desc={product.quantity_desc} seller_id={product.seller_id} 
                            setCart={setCart} cart={cart}
                              />
                    
                        </Grid>

                    ) )
                }
                
          
            </Grid>
        </Box>
        </div>
    );
}

export default ItemsContainer;
