import React, { useState } from "react";
import Form from "../Form/Form";
import classes from "./Doctor.module.css";
import SubmitButton from "../Button/SubmitButton/SubmitButton";

const Doctor = () => {
  let [state, setState] = useState({
    name: "",
    address: "",
  });
  const upgrade = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    alert("Name : " + state.name + "Address : " + state.address);
    //clean input field
    setState({
      name: "",
      address: "",
    });
  };

  return (
    <div>
      <Form title="Create Doctor" text="Details Info">
        <form className={classes.inptForm} onSubmit={submit}>
          <label htmlFor="">
            Search Patient by phone :{" "}
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={upgrade}
            />
          </label>
          <label htmlFor="">
            Address of Patient (District) :{" "}
            <input
              type="text"
              name="address"
              value={state.address}
              onChange={upgrade}
            />
          </label>
          <SubmitButton title="Create doctor" />
        </form>
      </Form>
    </div>
  );
};

export default Doctor;
