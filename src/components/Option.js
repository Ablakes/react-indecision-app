import React from "react";

const Option = props => (
  <div className="option">
    <p className="option__text">
      {props.index}. {props.optionText}
    </p>
    <button
      className="button button--link"
      onClick={() => {
        props.handleDeleteOption(props.optionText);
        //We have to call a function onClick in order to get access to optionText
      }}
    >
      delete
    </button>
  </div>
);

export default Option;
