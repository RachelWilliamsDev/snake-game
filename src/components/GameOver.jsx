import React from "react";

function GameOver({ score, startGame }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 text-white">
      <h2 className="text-2xl font-bold">Game Over</h2>
      <p className="text-lg">Your score: {score}</p>
      <button
        onClick={startGame}
        className="mt-4 px-4 py-2 bg-red-500 rounded hover:bg-red-600 transition"
      >
        Try Again
      </button>
    </div>
  );
}

export default GameOver;
