import React from "react";

const Button = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      {value}
    </button>
  );
};

export default Button;