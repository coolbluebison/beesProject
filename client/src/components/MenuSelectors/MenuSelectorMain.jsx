import React, {useState} from "react"

// import Box from '@mui/material/Box';


function MenuSelectorMain() {

    // // Sample categories and subcategories
    // // Need to edit add, fresh produce etc.
    // const categories = {
    //     "Fresh Produce": ["Fruits", "Vegetables", "Herbs"],
    //     "Meat & Seafood": ["Meat", "Poultry", "Pork", "Lamb", "Seafood"],
    //     "Dairy & Eggs": ["Milk", "Cheese", "Eggs", "Butter & Ghee"],
    //     "Pantry & Staples": ["Condiments", "Pasta", "Grains", "Baking", "Seasoning and Spices", "Ghee", "Oils and Vinegars", "Canned Food", "Packaged Goods"],
    //     "Baked Goods": ["Bread", "Baked Goods"],
    //     "Snacks & Bars": ["Snacks", "Chocolate", "Bars", "Candies"],
    //     "Beverages": ["Coffee", "Tea", "Coconut Water", "Energy Drinks", "Milk", "Sodas"],
    //     "Pets": ["Pet Food", "Treats", "Supplements"],
    //     "Personal Care": ["Skin Care", "Hair Care", "Oral Care", "Supplements"],
    //     "Others": ["Household Supplies", "Baby Care", "Local Artisan Goods"]
    // };


    // const [activeCategory, setActiveCategory] = useState(null);

    // const handleCategoryClick = (category) => {
    //   setActiveCategory(category);
    // };
  
    // return (
    //   <div className="flex justify-around items-center bg-gray-200 px-24 py-5">
    //     {activeCategory === null ? (
    //       Object.keys(categories).map((category) => (
    //         <button key={category} className="min-w-[130px] h-[120px] bg-white rounded-lg shadow p-2 flex flex-col items-center justify-center" onClick={() => handleCategoryClick(category)}>
    //           {/* for image */}
    //           <div className="w-30 h-20 bg-gray-400 rounded-t-lg"></div>
    //           <div className="text-xs w-full text-center bg-gray-300 rounded-b-lg">{category}</div>
    //         </button>
    //       ))
    //     ) : (
    //       <div className="w-full flex flex-wrap justify-around items-center">
    //         {categories[activeCategory].map((subcategory) => (
    //           <button key={subcategory} className="min-w-[130px] h-[120px] m-2 bg-white rounded-lg shadow p-2 flex flex-col items-center justify-center" onClick={() => alert(`Navigating to ${subcategory}`)}>
    //             {/* subcategory image */}
    //             <div className="w-30 h-20 bg-gray-500 rounded-t-lg"></div>
    //             <div className="text-xs w-full text-center bg-gray-300 rounded-b-lg">{subcategory}</div>
    //           </button>
    //         ))}
    //         <button className="mt-4 py-2 px-4 bg-red-500 text-white rounded" onClick={() => setActiveCategory(null)}>Back to Categories</button>
    //       </div>
    //     )}
    //   </div>
    // );


  const categoriesWithImages = {
      "Fresh Produce": {
          items: ["Fruits", "Vegetables", "Herbs"],
          image: "https://imgs.search.brave.com/iMYyk6iISdel3FE040gyJ-CvI-8oetxEc5KCvNNwmVE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9mcmVzaC1vcmdh/bmljLXZlZ2V0YWJs/ZV8xMTQxMDYtMTU4/OS5qcGc_c2l6ZT02/MjYmZXh0PWpwZw",
          subcategoryImages: {
              "Fruits": "/images/fruits.jpg",
              "Vegetables": "/images/vegetables.jpg",
              "Herbs": "/images/herbs.jpg"
          }
      },
      "Meat & Seafood": {
          items: ["Meat", "Poultry", "Pork", "Lamb", "Seafood"],
          image: "https://www.petalumaseared.com/wp-content/uploads/2020/04/meattemp.jpg",
          subcategoryImages: {
              // Add your subcategory images here
          }
      },
      // Add the rest of your categories here
  };

  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
      setActiveCategory(category);
  };

  return (
      <div className="flex justify-around items-center bg-gray-200 px-24 py-5">
          {activeCategory === null ? (
              Object.keys(categoriesWithImages).map((category) => (
                  <button key={category} className="min-w-[130px] h-[130px] bg-white rounded-lg shadow p-2 flex flex-col items-center justify-center" onClick={() => handleCategoryClick(category)}>
                      <img src={categoriesWithImages[category].image} alt={category} className="w-full h-3/4 rounded-t-lg"/>
                      <div className="text-xs w-full text-center bg-gray-300 rounded-b-lg">{category}</div>
                  </button>
              ))
          ) : (
              <div className="w-full flex flex-wrap justify-around items-center">
                  {categoriesWithImages[activeCategory].items.map((subcategory) => (
                      <button key={subcategory} className="min-w-[130px] h-[130px] m-2 bg-white rounded-lg shadow p-2 flex flex-col items-center justify-center" onClick={() => alert(`Navigating to ${subcategory}`)}>
                          <img src={categoriesWithImages[activeCategory].subcategoryImages[subcategory]} alt={subcategory} className="w-full h-3/4 rounded-t-lg"/>
                          <div className="text-xs w-full text-center bg-gray-300 rounded-b-lg">{subcategory}</div>
                      </button>
                  ))}
                  <button className="mt-4 py-2 px-4 bg-red-500 text-white rounded" onClick={() => setActiveCategory(null)}>Back to Categories</button>
              </div>
          )}
      </div>
  );


}
    


// }



export default MenuSelectorMain







