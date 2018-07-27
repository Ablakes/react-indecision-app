class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleSubtractOne = this.handleSubtractOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0
    };
  }

  handleAddOne() {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
      //We're returning and object that will replace the previous state
    });
  }
  handleSubtractOne() {
    this.setState(prevState => {
      return { count: prevState.count - 1 };
      //We're returning and object that will replace the previous state
    });
  }
  handleReset() {
    this.setState(() => {
      return { count: 0 };
      //We don't need previous state because we're setting state to 0 regardless
    });
  }

  render() {
    return (
      <div>
        <h3>Counter: {this.state.count}</h3>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleSubtractOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
