import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title"> Your options </h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
        disabled={props.options.length === 0}
      >
        Remove All
      </button>
    </div>
    {props.options.length === 0 && (
      <p className="widget__message">Please enter an option to get started</p>
    )}
    {props.options.map((option, index) => (
      <Option
        key={option}
        index={index + 1}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
