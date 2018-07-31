import React from "react";

import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";

export default class IndecisionApp extends React.Component {
  // We can just write export default here when exporting a class
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: []
    };
  }

  //When the component mounts, get the data out of local storage:
  componentDidMount() {
    //This try catch function makes sure our data is good before loading the app
    try {
      let json = localStorage.getItem("options");
      let options = JSON.parse(json);
      if (options) {
        //Only sets state if options exist - this saves memory
        this.setState(() => ({ options }));
        // This function is shorthand for return {options: options}
        // We can do that because we're returning a single key with a value with the same name
      }
    } catch (e) {
      // Do nothing
    }
  }

  //When a change is made, update the data in local storage
  componentDidUpdate(prevData, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      //Check to make sure the state has changed - this saves memory
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => {
      return {
        options: prevState.options.filter(option => {
          return optionToRemove !== option;
          //if it's the same option it will return false and the optionToRemove is not included in the new array
        })
      };
    });
  }

  handlePick() {
    let randNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randNum]);
  }

  handleAddOption(option) {
    if (!option) {
      return "enter valid option";
    } else if (this.state.options.indexOf(option) > -1) {
      //this checks if there is already an instance of "option" in the options array
      return "duplicate entry";
    }
    //Now this next line functions like an else clause
    this.setState(prevState => ({
      options: prevState.options.concat([option])
      //we use concat() instead of push because it doesn't affect our original prevState.options array. Much like map() it returns a new array without messing with the old array.
    }));
  }

  render() {
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          //These values are "props" in the respective component
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
