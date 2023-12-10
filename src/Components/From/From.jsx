import React, { useState } from "react";

export default function From() {
  const [state, setState] = useState({
    name: "",
    email: "",
    phn: "",
    msg: "",
  });
  const upgrade = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const submit = (event) => {
    event.preventDefault();
  };
  console.log(state);
  return (
    <div>
      <form action="" onSubmit={submit}>
        <input type="text" name="name" value={state.name} onChange={upgrade} />
        <input
          type="text"
          name="email"
          value={state.email}
          onChange={upgrade}
        />
        <input type="text" name="phn" value={state.phn} onChange={upgrade} />
        <input type="text" name="msg" value={state.msg} onChange={upgrade} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
