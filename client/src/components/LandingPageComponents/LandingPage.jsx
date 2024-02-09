import React from "react"

import Carousel from "./Carosel"
import GroceryNav from "./GroceryNav"
import MenuSelectorMain from "../MenuSelectors/MenuSelectorMain"
import CTA from "./CTA"

function LandingPage() {


    return (

      <div className="bg-white">

        <Carousel />
        {/* <GroceryNav /> */}
        <MenuSelectorMain />
        <CTA />
        
        
      </div>
  

    )
}

export default LandingPage;