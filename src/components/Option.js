import React from "react";

const Option = function(props) {
  return (
    <div>
      {props.optionText}
      <button
        onClick={() => {
          props.handleDeleteOption(props.optionText);
          //We have to call a function onClick in order to get access to optionText
        }}
      >
        delete
      </button>
    </div>
  );
};

export default Option;
