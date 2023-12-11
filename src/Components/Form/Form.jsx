import React from "react";
import classes from "./Form.module.css";

const Form = ({ title, text, children }) => {
  return (
    <div className={classes.container}>
      <h5>{title}</h5>
      <p>{text}</p>
      <div>{children}</div>
    </div>
  );
};

export default Form;
