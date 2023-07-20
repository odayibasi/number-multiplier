import React, { useState } from "react";

const NumberMultiplier = ({ multiplier = 2 }) => {
  // State to hold the input value and the result of multiplication
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);

  // Function to handle input change
  const handleChange = (event) => {
    const inputNumber = parseInt(event.target.value);
    setNumber(inputNumber);
    setResult(inputNumber * multiplier);
  };

  return (
    <div>
      <h2>Number Multiplier</h2>
      <input type="number" value={number} onChange={handleChange} />
      <p>Result: {result}</p>
    </div>
  );
};

export default NumberMultiplier;
