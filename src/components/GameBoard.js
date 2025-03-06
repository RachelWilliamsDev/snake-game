import React from "react";

function GameBoard() {
  return (
    <div className="grid grid-cols-20 gap-[1px] p-2 border border-blue-600">
      {Array.from({ length: 20 * 20 }).map((_, index) => (
        <div key={index} className="h-4 w-4 bg-blue-200"></div>
      ))}
    </div>
  );
}

export default GameBoard;
