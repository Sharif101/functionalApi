import React from "react";
import classes from "./User.module.css";

export default function User({ data }) {
  return (
    <div className={classes.singleUser}>
      <p>
        Name: <span>{data.name}</span>
      </p>
      <p>
        Email: <span>{data.email}</span>
      </p>
      <p>
        Address:{" "}
        <span>
          {data.address.street}, {data.address.suite}{" "}
        </span>
      </p>
      <p>
        City: <span>{data.address.city}</span>
      </p>
      <p>
        Phone: <span>{data.phone}</span>
      </p>
      <p>
        Website: <span>{data.website}</span>
      </p>
    </div>
  );
}
