import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ItemMenuCard from "./ItemMenuCard";

function ItemsContainer( {data, mainCategory, subCategory, setCart,cart }) {


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


    return (
        <Box className="padding" sx={{ flexGrow: 1, padding: '10%' }}>
            <Grid container spacing={6}>

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
    );
}

export default ItemsContainer;
