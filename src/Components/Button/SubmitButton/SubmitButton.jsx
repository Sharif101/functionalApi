import React from "react";

const SubmitButton = (props) => {
  return (
    <div>
      <button type="submit" onClick={props.onClick}>
        {props.title}
      </button>
    </div>
  );
};

export default SubmitButton;
