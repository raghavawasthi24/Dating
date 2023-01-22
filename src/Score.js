import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Score.css";

const Score = () => {
  const navigate=useNavigate();
  const movetohome=()=>{
    navigate("/explore");
  }
  return (
    <div className='score'>
        <div className='score-visual'>
            <div className='score-calculator'>
              <h2>YOUR LOVE SCORE IS:</h2>
              <p>{localStorage.getItem("score")}</p>
            </div>
            <hr/>
            <div className='score-msg'>
              <h1>Ohh! Your Score is too low</h1>
              {/* <h3>Congratulations!! Your Love is a friendship set to music.</h3> */}
              <h3>Your are not spending a lot time with your love.</h3>
              <button onClick={movetohome}>BOOST SCORE</button>
            </div>
        </div>
        <div className='terms'>
          <h2>Perks & Rewards</h2>
          <hr/>
          <ol>
            <li>You will be awarded with Bike when your annual score crosses 1,00,000.</li>
            <li>Perks which includes Iphone, Earpodes, Headphone will be awarded if your daily score crosses 10,000</li>
            <li>On the basis of Monthly Score, top 10 couples will be given a free Trip to Switzerland.</li>
          </ol>
        </div>
    </div>
  )
}

export default Score