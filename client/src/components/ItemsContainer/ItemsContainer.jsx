import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ItemMenuCard from "./ItemMenuCard";

function ItemsContainer( { data }) {


    // this is where to filter the data (in progress / later)
    // categories and sellers

    let filtered_data = data


    return (
        <Box className="padding" sx={{ flexGrow: 1, padding: '20%' }}>
            <Grid container spacing={6}>

                {
                    filtered_data.map ( product => (
                        
                        <Grid item xs={3}>
                            <ItemMenuCard key={product.id} name={product.name} image_files={JSON.parse(product.image_files)} price={product.price} quantity_desc={product.quantity_desc} seller_id={product.seller_id}  />
                    
                        </Grid>

                    ) )
                }
                
          
            </Grid>
        </Box>
    );
}

export default ItemsContainer;
