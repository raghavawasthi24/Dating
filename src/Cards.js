import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import "./Cards.css"

const Cards = ({val={}}) => {
    const {img} = val;
    const navigate=useNavigate()
    const updateMovieScore=()=>{
      let x =parseInt(localStorage.getItem("score"))+50;
      localStorage.removeItem("score");
      localStorage.setItem("score",x);
      navigate("/score")
    }
  return (
    <>
      <div className='single-card'><img className='poster' src={img} alt="" onClick={updateMovieScore}/></div> 
    </>
  )
}

export default Cards;