import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Navbar from "../../components/Navbar";
import Player from "./player";
import "./styles.css";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function Game() {
  const location = useLocation();
  const authenticatedUser = useContext(AuthContext);
  const weapons = ["rock", "paper", "scissors"];
  const [playerOne, setPlayerOne] = useState(weapons[0]);
  const [playerTwo, setPlayerTwo] = useState(weapons[0]);
  const [winner, setWinner] = useState("");
  let score = 0;

  const startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      setPlayerTwo(weapons[Math.floor(Math.random() * weapons.length)]);
      setWinner("");
      if (counter > 5) {
        clearInterval(gameInterval);
        setWinner(selectWinner());
      }
    }, 100);
  };

  const selectWinner = () => {
    if (playerOne === playerTwo) {
      return "Oops it's a Tie!";
    } else if (
      (playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "scissors" && playerTwo === "paper") ||
      (playerOne === "paper" && playerTwo === "rock")
    ) {
      score++;
      return "Player One Wins!";
    } else {
      return "Player Two Wins!";
    }
  };

  const selectWeapon = (weapon) => {
    setPlayerOne(weapon);
    setWinner("");
  };

  if (authenticatedUser === undefined || null) return null;

  return authenticatedUser ? (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Rock Paper Scissors</h1>
      <div className="text-center">
        <div>
          <Player weapon={playerOne} />
          <Player weapon={playerTwo} />
        </div>
        <div>
          <button className="weaponBtn" onClick={() => selectWeapon("rock")}>
            rock
          </button>
          <button className="weaponBtn" onClick={() => selectWeapon("paper")}>
            paper
          </button>
          <button
            className="weaponBtn"
            onClick={() => selectWeapon("scissors")}
          >
            scissor
          </button>
        </div>
        <div className="winner">{winner ? selectWinner() : null}</div>
        <button type="button" onClick={() => startGame()}>
          Start!
        </button>
        Score: {score}
      </div>
    </>
  ) : (
    <Navigate to={"/login"} replace state={{ from: location }} />
  );
}

export default Game;
