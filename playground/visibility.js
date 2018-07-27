class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visibility: true
    };
  }

  toggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>VisTog</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? "hide" : "show"}
        </button>
        {this.state.visibility && <p>Hide This shit</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
