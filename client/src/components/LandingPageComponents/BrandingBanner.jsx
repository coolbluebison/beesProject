import React from "react";

// Experimenting with Material ui components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

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
                    <Typography variant="h5" className="text-xl font-extrabold">What does Bees in Baskets Tries to Accomplish</Typography>
                </Paper>
                
                <Box elevation={0} className="h-[15%] bg-gray-200 text-[#4e461b] flex justify-center items-center">
                    <Typography variant="h5" className="font-lg font-bold">Connect People With Food That They Can Trust</Typography>
                </Box>
                
                <Box className="h-[60%] flex justify-between px-40">
                    {/* First Rectangle */}
                    <Box className="h-[90%] flex-1 mx-2 rounded-lg bg-[#e9f0f7b8] border border-gray-100">
                        <Box className="h-[25%] flex justify-center items-center text-center px-4">
                            <Typography variant="h6" className="text-lg font-extrabold">People Desire Fresh, Local, Good Food for Themselves and their families</Typography>
                        </Box>
                        <Box className="h-[75%] bg-cover bg-center rounded-b-lg" style={{ backgroundImage: `url(https://images.pexels.com/photos/11195868/pexels-photo-11195868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}>
                            {/* put  first image  */}
                        </Box>
                    </Box>
                    
                    {/* Second Rectangle */}
                    <Box className="h-[90%] flex-1 mx-2 rounded-lg bg-[#e9f0f7b8] border border-gray-100">
                        <Box className="h-[25%] flex justify-center items-center text-center px-4">
                            <Typography variant="h6" className="text-lg font-extrabold">Access to local, high quality food is often inaccessible, fragmented and inconvenient </Typography>
                        </Box>
                        <Box className="h-[75%] bg-cover bg-center rounded-b-lg" style={{ backgroundImage: `url(https://images.pexels.com/photos/6946499/pexels-photo-6946499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}>
                            {/* second img */}
                        </Box>
                    </Box>
                    
                    {/* Third Rectangle */}
                    <Box className="h-[90%] flex-1 mx-2 rounded-lg bg-[#e9edf0b8] border border-gray-100">
                        <Box className="h-[25%] flex justify-center items-center text-center px-4">
                            <Typography variant="h6" className="text-lg font-extrabold">Traditional Farmers Markets Offers Best Solution for Our Communities</Typography>
                        </Box>
                        <Box className="h-[75%] bg-cover bg-center rounded-b-lg" style={{ backgroundImage: `url(https://images.pexels.com/photos/6165051/pexels-photo-6165051.jpeg?auto=compress&cs=tinysrgb&w=600)` }}>
                            {/* place for third img */}
                        </Box>
                    </Box>
                </Box>
                
                <Paper elevation={1}  sx={{backgroundColor: '#fff2cc'}} className="h-[10%] bg-[#fff2cc] flex justify-center items-center">
                    <Typography variant="h6">Make Shopping for Local, High-Quality, Fresh Food As Easy as A Few Clicks</Typography>    
                </Paper>
            
            </Box>        
        </>


    )
}


export default BrandingBanner