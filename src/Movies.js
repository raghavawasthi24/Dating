import React from "react";
import Cards from './Cards'
import Sdata from "./Sdata.js/Moviesdata";
import "./Flex.css";


const Movies = () => {
  // const updateMovieScore=()=>{
  //   var x =localStorage.getItem("score");
  //   localStorage.removeItem("score");
  //   x=x+50;
  //   localStorage.setItem("score",x);
  // }
  return (
    <>
      <div className="Main-Subhead">Movies</div>
  
      <div className="cards">
        {Sdata.map((val) => {
          return <Cards key={val.id} val={val}/>;
        })}
      </div>
    </>
  );
};

export default Movies;
