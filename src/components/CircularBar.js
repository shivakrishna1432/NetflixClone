import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularBar = ({ rating }) => {
  return (
    <div>
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          textColor: "white",
          text: {
            fontSize: "16px",
          },
        })}
      />
    </div>
  );
};

export default CircularBar;
