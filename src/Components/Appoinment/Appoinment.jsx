import React from "react";
import { Link } from "react-router-dom";
import Shanpshot from "./Shanpshot/Shanpshot";
import Profile from "../Profile/Profile";

export default function Appoinment() {
  return (
    <div>
      {/* <Shanpshot />
      <Link to="/welcome">Click here</Link> <br />
      <Link to="/doctor">doctor</Link>
      <Link to="/create-appoinment">create appoinment</Link>
      <Link to="/dashboard">Dashboard</Link> */}
      <Profile />
    </div>
  );
}
