import React, { useState, useEffect } from "react";
import * as execute from '../contract/execute';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import LoadingIndicator from '../components/LoadingIndicator';

const Play = () => {
  const connectedWallet = useConnectedWallet();
  const playTime = 15;

  const [time, setTime] = useState(playTime);
  const [gameOver, setGameOver] = useState(false);
  // We use this to track where the target is on the screen
  const [targetPosition, setTargetPosition] = useState({ top: "15%", left: "50%" });
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  
  // Every second we're going to lower the value of time.
  useEffect(() => {
    const unsubscribe = setInterval(() => {
      setTime(time => time > 0 ? time - 1 : 0);
    }, 1000);
    return unsubscribe;
  }, []);
  
  useEffect(() => {
    if (time === 0) {
      setTargetPosition({ display: 'none' });
      alert(`Game Over! Your score is ${score}. Please confirm transaction to submit score.`);
      submitScore();
    }
  }, [time]);

  const submitScore = async () => {
    if (connectedWallet && connectedWallet.network.name === 'testnet') {
      setLoading(true);
      const tx = await execute.setScore(connectedWallet, score);
      console.log(tx);
      alert('Score submitted!');
      setLoading(false);
      window.location.href = '/leaderboard';
    }
  };

  const handleClick = () => {
    
    let audio = new Audio("/D_Roar.mp3");
    audio.volume = 0.2;
    audio.play();

    setScore(score => score + 1);
    
    setTargetPosition({
      top: `${Math.floor(Math.random() * 60)}%`,
      left: `${Math.floor(Math.random() * 60)}%`
    });
  };

  return (
    <div className="score-board-container">
      <div className="play-container">
        <span>SCORE: {score}</span>
        <span>FIGHT!</span>
        <span>TIME LEFT: {time} s</span>
      </div>

      
      {loading ? (
        <LoadingIndicator />
      ) : (
        <div className="game-container">
          <img src={"D.png"} id="target" alt="Demogorgon from Stranger Things" style={{ ...targetPosition }} onClick={handleClick} />
          <img src="11.gif" id="marine-img" alt="Eleven from Stranger Things" />
        </div>
      )}
    </div>
  );
};

export default Play;