import "./Instructions.css";
import React from "react";

const Instructions = () => {
  return (
    <div className="instructions">
      <p className="text">
        Press the "Add Card" button to add a new Card.
      </p>
      <p className="text">
        Use the "Sort Cards" button to sort the Cards by the increase.
      </p>
      <p className="text">
        Press the X icon on the top right to delete them.
      </p>
    </div>
  );
};

export default Instructions;
