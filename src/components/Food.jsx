import React from "react";
import { AppleIcon } from "lucide-react";
function Food({ position }) {
  return (
    <div
      className="absolute"
      style={{
        gridColumnStart: position.x + 1,
        gridRowStart: position.y + 1,
      }}
    >
      <AppleIcon size={15} fill="red" stroke="red" />
    </div>
  );
}

export default Food;
