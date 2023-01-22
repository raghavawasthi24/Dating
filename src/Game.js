import React from 'react'
import Cards from './Cards'
import Sdata from "./Sdata.js/Gamedata"
import "./Flex.css"
const Game = () => {
  return (
    <>
    <div className='Main-Subhead'>Games</div>
    <div className="cards" >
                {Sdata.map((val)=> {
                    return (
                        <div>
                        
                        <Cards
                            key={val.id} 
                            val={val}
                        />
                        
                        </div>
                    )
                })}
    </div>
    </>
  )
}

export default Game;