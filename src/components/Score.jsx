import React from "react";

function Score({ score, highScore }) {
  return (
    <div className="text-xl text-center my-4 flex space-x-28">
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
}

export default Score;
