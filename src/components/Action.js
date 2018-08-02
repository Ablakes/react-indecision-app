import React from "react";

const Action = props => (
  <button
    className="big-button"
    disabled={!props.hasOptions}
    onClick={props.handlePick}
  >
    What Should I do
  </button>
);

export default Action;
//We have to export default like this when exporting a variable
