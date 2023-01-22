import React from 'react'
import Cards from './Cards'
import Sdata from "./Sdata.js/Restrodata"
import "./Flex.css"

const Restro = () => {
  return (
    <>
    <div className='Main-Subhead'>Restaurents</div>
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

export default Restro