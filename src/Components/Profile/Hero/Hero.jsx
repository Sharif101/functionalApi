import React from "react";
import classes from "./Hero.module.css";
import pic from "../images/profile.png";
import verified from "../images/verified.png";

export default function Hero() {
  return (
    <div className={classes.container}>
      <div className={classes.profile}>
        <div className={classes.img}>
          <img src={pic} alt="" />
        </div>
        <div className={classes.text}>
          <div className={classes.name}>
            <p>Kiera Hill</p>
            <div className={classes.icon}>
              <img src={verified} alt="" />
            </div>
          </div>
          <p>10 Items - 21 Sale - 8 Comments</p>
        </div>
      </div>
      <button>Follow</button>
    </div>
  );
}
