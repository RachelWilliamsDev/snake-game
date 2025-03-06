import React from "react";

function CountdownTimer({ countdown }) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl text-black font-bold">
      {countdown}
    </div>
  );
}

export default CountdownTimer;
