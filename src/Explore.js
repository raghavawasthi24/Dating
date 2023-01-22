import React from "react";
import "./Explore.css";
import Game from "./Game";
import Hotel from "./Hotel";
import Movies from './Movies';
import Restro from "./Restro";
import Trips from "./Trips";
function Explore() {
  return (
    <div className="apps">
      <h2>Enjoy The Day with Your Love</h2>
    <Movies />
    <Trips />
    <Restro />
    <Hotel />
    <Game />
    </div>
  );
}

export default Explore;