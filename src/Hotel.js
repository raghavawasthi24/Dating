import React from 'react'
import Cards from './Cards'
import Sdata from "./Sdata.js/Hoteldata"
import "./Flex.css"

const Hotel = () => {
  return (
    <>
    <div className='Main-Subhead'>Hotels</div>
    <div className="cards" >
                {Sdata.map((val)=> {
                    return (
                        <div className='single-card'>
                        {/* <Carousel> */}
                        <Cards
                            key={val.id} 
                            val={val}
                        />
                        {/* </Carousel> */}
                        </div>
                    )
                })}
    </div>
    </>
  )
}

export default Hotel