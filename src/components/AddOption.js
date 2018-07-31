import React from "react";

export default class AddOption extends React.Component {
  // We can just write export default here when exporting a class
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim(); //how we access the input value in the event object. trim() removes empty spaces
    const error = this.props.handleAddOption(option);
    //the only thing that can be returned from handleAddOption in Indecision is an error, otherwise the state will be updated when this const err runs handleAddOption
    this.setState(() => ({
      error
    }));
    //shorthand for return {options:error}  (I think)
    if (!error) {
      e.target.elements.option.value = "";
      //clears the input field on submit(if no errors)
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p> {this.state.error} </p>}
        <form action="" onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button> Submit </button>
        </form>
      </div>
    );
  }
}
