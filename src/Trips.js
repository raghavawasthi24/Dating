import React from 'react'
import Cards from './Cards'
import Sdata from "./Sdata.js/Tripsdata"
import "./Flex.css"

const Trips = () => {
  return (
    <>
    <div className='Main-Subhead'>Trips</div>
    <div className="cards" >
                {Sdata.map((val)=> {
                    return (
                        <diV>
                        {/* <Carousel> */}
                        <Cards
                            key={val.id} 
                            val={val}
                        />
                        {/* </Carousel> */}
                        </diV>
                    )
                })}
    </div>
    </>
  )
}

export default Trips