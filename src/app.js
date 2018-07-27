class Indecision extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: ["one", "two", "three"]
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
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
    this.setState(prevState => {
      return {
        options: prevState.options.concat([option])
        //we use concat() instead of push because it doesn't affect our original prevState.options array. Much like map() it returns a new array without messing with the old array.
      };
    });
  }

  render() {
    const foot = "first footer";

    return (
      <div>
        <Header />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <Footer title={foot} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return <h1> Indecision App </h1>;
  }
}

class Action extends React.Component {
  render() {
    return (
      <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>
        What Should I do
      </button>
    );
  }
}
class Option extends React.Component {
  render() {
    return <div> {this.props.optionText} </div>;
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}> Remove All </button>{" "}
        {/* no idea why thse brackets {" "} keep showing up */}
        <p> These are your options </p>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class AddOption extends React.Component {
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
    this.setState(() => {
      return { error };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        {/* if an error exists, post it to the screen */}
        <form action="" onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button> Submit </button>{" "}
        </form>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return <div> {this.props.title} </div>;
  }
}

ReactDOM.render(<Indecision />, document.getElementById("app"));

// const appRoot = document.getElementById("app");

// const app = {
//   title: "Indecision App",
//   subtitle: "Put your life in the hands of a computer",
//   options: []
// };

// const onFormSubmit = e => {
//   e.preventDefault(); // prevents page reload

//   const newOption = e.target.elements.option.value;
//   if (newOption) {
//     app.options.push(newOption);
//     e.target.elements.option.value = "";
//     render();
//   }
// };

// let ranNum = -1;

// const makeDecision = () => {
//   ranNum = Math.floor(Math.random() * app.options.length);
//   render();
// };

// const removeOptions = () => {
//   app.options = [];
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title ? app.title : "Anonymous"}</h1>
//       {app.subtitle && <p>{app.subtitle}</p>}
//       <p>{app.options.length > 0 ? "Here are your options:" : "No options"}</p>
//       <button disabled={app.options.length === 0} onClick={makeDecision}>
//         Random
//       </button>
//       <p>{app.options[ranNum]}</p>
//       <button onClick={removeOptions}>Remove All</button>
//       <ol>
//         {app.options.map(item => (
//           <li key={app.options.indexOf(item)}>{item}</li>
//         ))}
//       </ol>
//       <form onSubmit={onFormSubmit}>
//         <input type="text" name="option" />
//         <button>submit</button>
//       </form>
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// render();

//
//
//
//
//
//
//
//
// CODING CHALLENGE - USE ES6 IN A MAP METHOD
// const nums = {
//   numbers: [1, 2, 3, 4, 5],
//   mulitplyBy: 5,
//   multiply() {
//     return this.numbers.map(num => (num *= this.mulitplyBy));
//   }
// };
// console.log(nums.multiply());
//////////////////////////////

// // const getName = name => name.split(" ")[0];
// // const myName = "Alex Blakesley";
// // const otherName = "Dan Smith";

// // const logName = name => console.log(getName(name));

// // logName(myName);
// // logName(otherName);

// // const stuff = {
// //   numbers: [1, 2, 3, 4],
// //   mulitplyBy: 5,
// //   multiplier() {
// //     const newNums = this.numbers.map((num, x) => {
// //       return num * x;
// //     });
// //   }
// // };

// // console.log(stuff.multiplier(stuff.numbers));

// // var nums = [1, 2, 3, 4];
// // var newn = 0;
// // nums.forEach(function(x) {
// //   newn = nums[x - 1] * 8;
// //   console.log(newn);
// // });

// // const mult = function() {
// //   nums.map(function(x) {
// //     return nums[x] * 3;
// //   });
// // };

// // console.log(mult());

// // nums.forEach(function() {
// //   this[x] * 3;
// // });
