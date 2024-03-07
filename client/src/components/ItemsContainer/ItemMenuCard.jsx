import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { RiStarSFill, RiLoopRightFill } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import Box from '@mui/material/Box';

// useNavigate
import { useNavigate } from 'react-router-dom';

{/* <ItemMenuCard key={product.id} name={product.name} image_files={product.image_files} price={product.price} quantity_desc={product.quantity_desc}  /> */}


export default function ItemMenuCard( {product_id, name, image_files, price, quantity_desc, seller_id, setCart, cart }) {
    
    let pic = image_files[0]

    const navigate = useNavigate();

    // let cartItem = [
    //     {product_id : product_id,
    //     name : name,
    //     image : image_files[0],
    //     price : price,
    //     quantity_desc : quantity_desc,
    //     seller_id: seller_id,
    //     amount: 1}
    // ]


    const handleItemClick = () => {
        navigate('/item', { state: {product_id, name, image_files, price, quantity_desc, seller_id} });
    }

    // double check this cart add logic
    // function addToCart() {

    //     console.log(cart)

    //     if (cart.hasOwnProperty(product_id)) {
    //         // does the product even exist???
            
    //         let updatedProduct = 
            
    //         {...cart[product_id], amount: cart[product_id].amount + 1 };

    //         // PATCH attempt
    //         fetch('http://127.0.0.1:5555/carts/0', {
    //             method: 'PATCH', 
    //             headers: {
    //               'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(updatedProduct), 
    //           })
    //           .then(response => response.json()) 
    //           .then(data => {
    //             console.log(data);
    //             })
    //           .catch(error => {
    //             console.error('Error:', error);
    //         });
    
    //     } else {
           
    //         let newProduct = {
    //           name,
    //           image: image_files[0], 
    //           price,
    //           quantity_desc,
    //           seller_id,
    //           amount: 1 
    //         };

    //         console.log(newProduct)


    //         // Post attempt
    //         fetch('http://127.0.0.1:5555/carts/0', {
    //             method: 'POST', 
    //             headers: {
    //               'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(newProduct), 
    //           })
    //           .then(response => response.json()) 
    //           .then(data => {
    //             console.log(data);
    //             })
    //           .catch(error => {
    //             console.error('Error:', error);
    //           });
    //         }

           

    //  }


        async function addToCart() {

            if (cart.hasOwnProperty(product_id)) {
                // Prepare the updated product object
                let updatedProduct = {...cart[product_id], amount: cart[product_id].amount + 1};

                try {
                    const response = await fetch('http://127.0.0.1:5555/carts/1', {
                        method: 'PATCH', 
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({[product_id]: updatedProduct}), 
                    });
                    if (response.ok) {
                        const data = await response.json();
                        console.log("Update success:", data);
                        setCart(prevCart => ({...prevCart, [product_id]: updatedProduct}));
                    } else {
                        console.error('Failed to update product:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            } 
            
            // if it doesnt, need to post the product
            else {
                
                let newProduct = {
                    name,
                    image: image_files[0],
                    price,
                    quantity_desc,
                    seller_id,
                    amount: 1
                };

                try {
                    const response = await fetch('http://127.0.0.1:5555/carts/1', {
                        method: 'PATCH', 
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(newProduct),
                    });
                    if (response.ok) {
                        const data = await response.json();
                        console.log("Add success:", data);

                        setCart(prevCart => ({...prevCart, [product_id]: newProduct}));
                    } else {
                        console.error('Failed to add new product:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        }



    // }

    return (
        <Box className="w-52 h-[400px] flex-shrink-0 flex flex-col ">

            <div id="gateway" onClick={handleItemClick}>
                {/* this is inner div1, for the picture */}    
                {/* Picture section - 40% */}
                <div className="w-full h-[200px] flex-grow-0 flex-shrink-0">
                    <img src={pic} className="w-full h-full object-fill rounded-lg"/>
                </div>


                {/* this is inner div2, rating maybe */}    
                {/* Rating section - occupying ~5% */}
                <div className="flex-grow-0 flex-shrink-0" >
                    <div className="flex items-center py-0">
                        <RiStarSFill style={{color: "yellow"}}/>
                        <RiStarSFill style={{color: "yellow"}}/>
                        <RiStarSFill style={{color: "yellow"}}/>
                        <RiStarSFill style={{color: "yellow"}}/>
                        <RiStarSFill style={{color: "gray"}}/>
                        <p className="text-gray-400 text-xs pl-2 font-medium">1111</p>
                    </div>
                    {/* <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-100 shadow-md relative cursor-pointer" style={{bottom: '12px', left: '40px'}}> 
                        <FaRegHeart size={"1.25rem"}/> 
                    </div> */}
                </div>


                {/* this is inner div2, rating maybe */}    
                {/* Name, description etc. - 10%, Need to test this out with actual data and adjust later */}
                <span className="flex-grow-0 flex-shrink-0 font-bold text-black my-4 h-6" >
                    {name}
                </span>

                {/* Other details (15% ---- 3, 5%, quantity, farmers name and price) */}
                <div className="flex flex-col flex-grow-0 flex-shrink-0" >
                    <span className="font-medium text-xs py-0">{quantity_desc}</span>
                    <span className="font-medium text-xs py-0">by Farmer Name</span>
                    <span className="font-medium text-md py-4 mt-auto">${price}</span>
                </div>
            </div>


            {/* Aesthetic Span ---- Lets try this one and see, Empty span - 10% */}
            <span className="flex-grow-0 flex-shrink-0" ></span>

            {/* Buttons, maybe first button add to cart, second button autoship, check Tri's color scheme and edit - 20% */}
            <div className="mt-auto text-sm font-semibold flex-grow-0 flex-shrink-0" >
                <p className="w-full bg-yellow my-2 cursor-pointer text-center transition-all rounded-lg py-2 flex items-center justify-center gap-2"
                onClick={()=> addToCart()}
                >Add To Cart <BsCart2 size={"1.1rem"}/> </p>
                {/* <p className="w-full bg-honey my-2 cursor-pointer text-center transition-all rounded-lg py-2 flex items-center justify-center gap-2"><RiLoopRightFill size={"1.1rem"}/>Autoship</p> */}
            </div>
        
        </Box>
    )
}



// setCart([...cart,cartItem])