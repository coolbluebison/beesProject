import React, {useState} from "react"

// import Box from '@mui/material/Box';


function MenuSelectorMain() {

    // Sample categories and subcategories
    // Need to edit add, fresh produce etc.
    const categories = {
        "Meat & Seafood": ["Meat", "Poultry", "Pork", "Lamb", "Seafood"],
        "Pantry & Staples": ["Condiments", "Pasta", "Grains", "Baking", "Seasoning and Spices", "Ghee", "Oils and Vinegars", "Canned Food", "Packaged Goods"],
        "Baked Goods": ["Bread", "Baked Goods"],
        "Beverages": ["Coffee", "Tea", "Coconut Water", "Energy Drinks", "Milk", "Plant Based Milks", "Sodas"],
        "Snacks & Bars": ["Snacks", "Chocolate", "Bars", "Candies"],
        "Personal Care": ["Skin Care", "Hair Care", "Oral Care", "Supplements"],
        "Pets": ["Pet Food", "Treats", "Supplements"],
    };


    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (category) => {
      setActiveCategory(category);
    };
  
    return (
      <div className="flex justify-around items-center bg-gray-200 px-24 py-5">
        {activeCategory === null ? (
          Object.keys(categories).map((category) => (
            <button key={category} className="min-w-[130px] h-[120px] bg-white rounded-lg shadow p-2 flex flex-col items-center justify-center" onClick={() => handleCategoryClick(category)}>
              {/* for image */}
              <div className="w-30 h-20 bg-gray-400 rounded-t-lg"></div>
              <div className="text-xs w-full text-center bg-gray-300 rounded-b-lg">{category}</div>
            </button>
          ))
        ) : (
          <div className="w-full flex flex-wrap justify-around items-center">
            {categories[activeCategory].map((subcategory) => (
              <button key={subcategory} className="min-w-[130px] h-[120px] m-2 bg-white rounded-lg shadow p-2 flex flex-col items-center justify-center" onClick={() => alert(`Navigating to ${subcategory}`)}>
                {/* subcategory image */}
                <div className="w-30 h-20 bg-gray-500 rounded-t-lg"></div>
                <div className="text-xs w-full text-center bg-gray-300 rounded-b-lg">{subcategory}</div>
              </button>
            ))}
            <button className="mt-4 py-2 px-4 bg-red-500 text-white rounded" onClick={() => setActiveCategory(null)}>Back to Categories</button>
          </div>
        )}
      </div>
    );


}



export default MenuSelectorMain







