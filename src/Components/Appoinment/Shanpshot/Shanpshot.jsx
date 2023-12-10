import React from "react";
import classes from "./Shanpshot.module.css";
import { Link } from "react-router-dom";
import Cardbox from "./Cardbox/Cardbox";

const Shanpshot = () => {
  return (
    <div>
      <div className={classes.container}>
        <Link to="/totalapp">
          <Cardbox text="Total Appoinmnet" count="2" pervi="3" />
        </Link>
        <Link to="/myhealth">
          <Cardbox text="My Health" count="10" pervi="30" />
        </Link>
        <Link>
          <Cardbox text="Smart Doctor" count="89" pervi="87" />
        </Link>
      </div>
    </div>
  );
};

export default Shanpshot;
