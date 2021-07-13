import React from "react";
import "./styles.scss";

/*
  Button component for general used
  @props: { theme, text, isDisabled}
*/
const Button = ({ theme, text, isDisabled }) => (
  <button disabled={isDisabled} className={`btn ${theme}`}>
    {text}
  </button>
);

export default Button;
