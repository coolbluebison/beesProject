import React from "react";

// Experimenting with Material ui components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


function BrandingBanner(){

    // Idea would be to have a banner explaining what Bees in Baskets Try to Accomplish
    // Top of the banner 10% -> "What we try to accomplish"
    // Remaining banner
    // Top 15% - Connecting Consumers
    // Middle 60% - 3 Rectangles
    // Bottom 15% - Make it convenient and easy

    return (

        <>
            <Box className="w-full h-[900px] bg-grey"> 
                
                <Paper elevation={2} sx={{backgroundColor: '#fff2cc'}} className="h-[10%] bg-[#fff2cc] flex justify-center items-center">
                    <h1 className="text-lg md:text-2xl text-black font-bold">What does Bees in Baskets Tries to Accomplish</h1>
                </Paper>
                
                <Box elevation={0} className="h-[15%] bg-gray-200  flex justify-center items-center">
                    <h1 className="text-lg md:text-2xl text-[#4e461b] font-extrabold">Connect People With Food That They Can Trust</h1>
                </Box>
                
                <Box className="h-[50%] flex justify-between px-40">
                    {/* First Rectangle */}
                    <Box className="h-[90%] flex-1 mx-2 rounded-lg bg-[#f9f9f9] border border-gray-100">
                        <Box className="h-[25%] flex justify-center items-center text-center px-4">
                            <h1 className="text-lg font-extrabold">People Desire Fresh, Local, Good Food for Themselves and their families</h1>
                        </Box>
                        <Box className="h-[75%] bg-cover bg-center rounded-b-lg" style={{ backgroundImage: `url(https://images.pexels.com/photos/11195868/pexels-photo-11195868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}>
                            {/* put  first image  */}
                        </Box>
                    </Box>
                    
                    {/* Second Rectangle */}
                    <Box className="h-[90%] flex-1 mx-2 rounded-lg bg-[#f9f9f9] border border-gray-100">
                        <Box className="h-[25%] flex justify-center items-center text-center px-4">
                        <h1 className="text-lg font-extrabold">Access to local, high quality food is often inaccessible, fragmented and inconvenient </h1>
                        </Box>
                        <Box className="h-[75%] bg-cover bg-center rounded-b-lg" style={{ backgroundImage: `url(https://images.pexels.com/photos/6946499/pexels-photo-6946499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}>
                        </Box>
                    </Box>
                    
                    {/* Third Rectangle */}
                    <Box className="h-[90%] flex-1 mx-2 rounded-lg bg-[#f9f9f9] border border-gray-100">
                        <Box className="h-[25%] flex justify-center items-center text-center px-4">
                        <h1 className="text-lg font-extrabold">Traditional Farmers Markets Offers Best Solution for Our Communities</h1>
                        </Box>
                        <Box className="h-[75%] bg-cover bg-center rounded-b-lg" style={{ backgroundImage: `url(https://images.pexels.com/photos/6165051/pexels-photo-6165051.jpeg?auto=compress&cs=tinysrgb&w=600)` }}>
                        </Box>
                    </Box>
                </Box>
                
                <Paper elevation={1}  sx={{backgroundColor: '#fff2cc'}} className="h-[10%] bg-[#fff2cc] flex justify-center items-center">
                <h1 className="text-lg md:text-2xl text-black font-bold">Make Shopping for Local, High-Quality, Fresh Food As Easy as A Few Clicks</h1>    
                </Paper>
            
            </Box>   


            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
                <Paper elevation={0} sx={{ maxWidth: 2100, my: 1, mx: 'auto', p: 2, borderRadius: '16px' }} >
                    <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Box
                            sx={{
                                width: '100%',
                                height: 400,
                                backgroundColor: 'primary.light',
                                borderRadius: '8px',
                            }}

                            style={{ backgroundImage: `url(https://images.pexels.com/photos/1276237/pexels-photo-1276237.jpeg?auto=compress&cs=tinysrgb&w=800)` }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <h6 className="text-lg md:text-2xl text-black font-bold ">


                        We prioritize working with producers that adhere to our code of conduct and standards, which include
                        animal welfare first, organic produce whenever possible, and a commitment to sustainability 
                        </h6>
                    </Grid>
                    </Grid>
                </Paper>

                <br></br>
                <br></br>

                <Paper elevation={0} className="justify-center items-center" sx={{ maxWidth: 2100, my: 1, mx: 'auto', p: 2, borderRadius: '16px' }}>
                    <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs={12} sm={8}>
                        <h6 className="text-lg md:text-2xl text-black font-bold">
                        Shopping local builds and strengthens the backbone of our communities. By choosing local
                        businesses, we support our neighbors and create a vibrant, interconnected community
                        </h6>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box
                        sx={{
                            width: '100%',
                            height: 400,
                            backgroundColor: 'primary.light',
                            borderRadius: '8px',
                        }}

                        style={{ backgroundImage: `url(https://images.pexels.com/photos/7728651/pexels-photo-7728651.jpeg?auto=compress&cs=tinysrgb&w=800)` }}
                            // <img src='' />
                        />
                    </Grid>
                    </Grid>
                </Paper>

                <br></br>
                <br></br>

                <Paper elevation={0} sx={{ maxWidth: 2100, my: 1, mx: 'auto', p: 2, borderRadius: '16px' }} >
                    <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Box
                            sx={{
                                width: '100%',
                                height: 400,
                                backgroundColor: 'primary.light',
                                borderRadius: '8px',
                            }}

                            style={{ backgroundImage: `url(https://images.pexels.com/photos/12986072/pexels-photo-12986072.jpeg?auto=compress&cs=tinysrgb&w=800)` }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <h6 className="text-lg md:text-2xl text-black font-bold ">
                        Most Mediterranean cultures derive significant health benefits from farmers markets, thanks to their emphasis on fresh, locally-sourced fruits, vegetables, and whole foods that are central to their diets.
                        </h6>
                    </Grid>
                    </Grid>
                </Paper>


                


            </Box>

            <br></br>
            <br></br>


        </>

    )
}


export default BrandingBanner