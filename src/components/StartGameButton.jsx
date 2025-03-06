import React from "react";

function StartGameButton({ onStartGame }) {
  return (
    <button
      onClick={onStartGame}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white py-2 px-4 rounded"
    >
      Start Game
    </button>
  );
}

export default StartGameButton;
