import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import Navbar from "../../components/Navbar";
import Player from "./player";
import "./styles.css";
import { Navigate, useLocation } from "react-router-dom";

function Game() {
  const location = useLocation();
  const authenticatedUser = useContext(AuthContext);
  const weapons = ["rock", "paper", "scissors"];
  const [playerOne, setPlayerOne] = useState(weapons[0]);
  const [playerTwo, setPlayerTwo] = useState(weapons[0]);
  const [winner, setWinner] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    switch (playerOne + playerTwo) {
      case "scissorspaper":
      case "rockscissors":
      case "paperrock":
        setWinner("YOU WIN!");
        setScore(score + 1);
        break;
      case "paperscissors":
      case "scissorsrock":
      case "rockpaper":
        setWinner("YOU LOSE!");
        break;
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
        setWinner("ITS A DRAW!");
        break;
    }
  }, [playerOne, playerTwo]);

  const selectWeapon = (weapon) => {
    setPlayerOne(weapon);
    setPlayerTwo(weapons[Math.floor(Math.random() * weapons.length)]);
    setWinner("");
  };

  if (authenticatedUser === undefined) return null;

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
        <div className="winner">{winner}</div>
        <div>
          <h1>Score: {score}</h1>
        </div>
        <div>
          <h1>Player: {authenticatedUser.displayName}</h1>
          {console.log(authenticatedUser.displayName)}
        </div>
      </div>
    </>
  ) : (
    <Navigate to={"/login"} replace state={{ from: location }} />
  );
}

export default Game;
