import React from "react"

import Carousel from "./Carosel"
import GroceryNav from "./GroceryNav"
import MenuSelectorMain from "../MenuSelectors/MenuSelectorMain"
import CTA from "./CTA"

import BrandingBanner from "./BrandingBanner"

function LandingPage() {


    return (

      <div className="bg-white">

        <Carousel />
        {/* <GroceryNav /> */}
        <br></br>
        <MenuSelectorMain />
        <br></br>
        <br></br>
        <BrandingBanner />
        <CTA />
        
        
      </div>
  

    )
}

export default LandingPage;