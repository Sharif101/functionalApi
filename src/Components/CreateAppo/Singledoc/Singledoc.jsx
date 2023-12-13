import React from "react";
import classes from "./Singledoc.module.css";

const Singledoc = ({ singleDoc }) => {
  return (
    <div className={classes.container}>
      <div className={classes.singleDiv}>
        <h5>Speciality</h5>
        <h5>Qualification</h5>
        <h5>Chamber Fee</h5>
      </div>
      <div className={classes.singleDiv}>
        <p>{singleDoc?.DoctorSpeciality?.speciality}</p>
        <p>{singleDoc?.DoctorQualification?.qualification}</p>
        <p>{singleDoc?.Doctor?.online_fees || "--"}</p>
      </div>
    </div>
  );
};

export default Singledoc;
