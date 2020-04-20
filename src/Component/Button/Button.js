import React from "react";

const Button = ({ title, isDisable, handleClick, value }) => {
  return (
    <button
      disabled={isDisable}
      value={value}
      className="btn"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
