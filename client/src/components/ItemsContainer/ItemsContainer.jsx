import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ItemMenuCard from "./ItemMenuCard";

function ItemsContainer() {
    return (
        <Box className="padding" sx={{ flexGrow: 1, padding: '20%' }}>
            <Grid container spacing={6}>
                <Grid item xs={3}>
                    <ItemMenuCard />
                </Grid>
                <Grid item xs={3}>
                    <ItemMenuCard />
                </Grid>
                <Grid item xs={3}>
                    <ItemMenuCard />
                </Grid>
                <Grid item xs={3}>
                    <ItemMenuCard />
                </Grid>
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
