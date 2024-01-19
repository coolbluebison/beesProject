import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ItemMenuCard from "./ItemMenuCard";

function ItemsContainer( { data }) {


    // this is where to filter the data (in progress / later)

    let filtered_data = data


    return (
        <Box className="padding" sx={{ flexGrow: 1, padding: '20%' }}>
            <Grid container spacing={6}>


                {
                    filtered_data.map ( product => (  

                        <Grid item xs={3}>
                            <ItemMenuCard key={product.id} name={product.name} image_files={product.image_files} price={product.price} quantity_desc={product.quantity_desc}  />
                    
                        </Grid>


                    ) )
                }
                

                
                <Grid item xs={3}>
                    <ItemMenuCard />
                </Grid>
                
                <Grid item xs={3}>
                    <ItemMenuCard />
                </Grid>
                



            </Grid>
        </Box>
    );
}

export default ItemsContainer;
