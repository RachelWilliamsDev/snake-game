import React from "react";

export default function Snake({ snake }) {
  return (
    <>
      {snake.map((segment, index) => (
        <div
          key={index}
          className={`w-4 h-4 bg-green-500 absolute transform translate-x-[${
            segment.x * 100
          }%] translate-y-[${segment.y * 100}%]`}
        ></div>
      ))}
    </>
  );
}
