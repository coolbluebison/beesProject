import React from "react"

import Carousel from "./Carosel"
import GroceryNav from "./GroceryNav"
import CTA from "./CTA"

function LandingPage() {


    return (

      <div className="bg-white">

        <Carousel />
        <GroceryNav />
        <CTA />
        
        
      </div>
  

    )
}

export default LandingPage;