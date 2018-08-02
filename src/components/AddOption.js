import React from "react";

export default class AddOption extends React.Component {
  // We can just write export default here when exporting a class
  state = {
    error: undefined
  };

  handleAddOption = e => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim(); //how we access the input value in the event object. trim() removes empty spaces
    const error = this.props.handleAddOption(option);
    //We are now calling the function(with the same name`) up in the Indecision component, it will either update the state, or return an error that we can use to update the state here
    this.setState(() => ({
      error
    }));
    //shorthand for return {options:error}  (I think)
    if (!error) {
      e.target.elements.option.value = "";
      //clears the input field on submit(if no errors)
    }
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error"> {this.state.error} </p>
        )}
        <form className="add-option" action="" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button"> Submit </button>
        </form>
      </div>
    );
  }
}
