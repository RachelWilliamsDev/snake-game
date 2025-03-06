import React from "react";

function Snake({ snake }) {
  return (
    <>
      {snake.map((segment, index) => {
        const gridColumn = segment.x + 1;
        const gridRow = segment.y + 1;

        return (
          <div
            key={index}
            className="absolute bg-green-500 w-4 h-4"
            style={{
              gridColumnStart: gridColumn,
              gridRowStart: gridRow,
            }}
          ></div>
        );
      })}
    </>
  );
}

export default Snake;
