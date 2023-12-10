import React from "react";
import classes from "./Cardbox.module.css";

const Cardbox = ({ text, count, pervi }) => {
  return (
    <div className={classes.container}>
      <p>{text}</p>
      <small>total: {count}</small>
      <small>previous: {pervi}</small>
    </div>
  );
};

export default Cardbox;
