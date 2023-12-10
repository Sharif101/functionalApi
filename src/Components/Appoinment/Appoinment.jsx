import React from "react";
import { Link } from "react-router-dom";
import Shanpshot from "./Shanpshot/Shanpshot";

export default function Appoinment() {
  return (
    <div>
      <Shanpshot />
      <Link to="/welcome">Click here</Link>
    </div>
  );
}
