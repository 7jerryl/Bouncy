// This is the Child component. It is currently referenced before
// the RenderedComponent on the index page, therefore it will be defined
// before the code in app.jsx executes. This is important as defining it
// after would cause an error, preventing anything from being rendered.
class Child extends React.Component {
  constructor(props) {
    // Props holds the parameter values passed in from the parent.
    // In this case, it holds the "grabRandomColor" function that was mapped
    // to the "parentFunction" parameter.
    super(props); // We need to define a state for any variables used in "render" which will change.
    // This is a React best-practice.

    this.state = {
      color: ""
    }; // We need to bind the keyword "this" to our method in order to
    // reference this component's state. We need to reference this
    // component's state in order to modify it.

    this.childFunction = this.childFunction.bind(this);
  } // When the child function is called, it calls the parent function
  // in order to retrieve a random color string in hex format.


  childFunction() {
    this.setState({
      color: this.props.parentFunction()
    });
  }

  render() {
    // We set the document object's body color to the current state's color.
    document.body.style.backgroundColor = this.state.color;
    return React.createElement("div", null, React.createElement("h1", null, "Hello World!"), React.createElement("h2", null, "Click on the button to change the background color to something random. ", React.createElement("br", null), React.createElement("button", {
      onClick: this.childFunction
    }, "Click Me!")));
  }

}