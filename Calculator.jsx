import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setInput(evaluate(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "C", "DEL", "(", ")",
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  return (
    <div className="calculator">
      <Display value={input} />

      <div className="buttons">
        {buttons.map((btn, index) => (
          <Button
            key={index}
            value={btn}
            onClick={() => {
              if (btn === "C") handleClear();
              else if (btn === "DEL") handleDelete();
              else if (btn === "=") handleCalculate();
              else handleClick(btn);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;