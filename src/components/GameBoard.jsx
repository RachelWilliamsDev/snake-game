import React, { useState } from "react";
import Snake from "./Snake";

function GameBoard() {
  const [snake] = useState([
    { x: 5, y: 5 },
    { x: 6, y: 5 },
    { x: 7, y: 5 },
  ]);

  return (
    <div className="grid grid-cols-20 gap-[1px] p-2 border border-blue-600">
      {Array.from({ length: 20 * 20 }).map((_, index) => (
        <div key={index} className="h-4 w-4 bg-blue-200"></div>
      ))}
      <Snake snake={snake} />
    </div>
  );
}

export default GameBoard;
