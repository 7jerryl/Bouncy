// This is the Child component. It is currently referenced before
// the RenderedComponent on the index page, therefore it will be defined
// before the code in app.jsx executes. This is important as defining it
// after would cause an error, preventing anything from being rendered.
class Child extends React.Component {
  constructor(props) {
    // Props holds the parameter values passed in from the parent.
    // In this case, it holds the "grabRandomColor" function that was mapped
    // to the "parentFunction" parameter.
    super(props);
    // We need to define a state for any variables used in "render" which will change.
    // This is a React best-practice.
    this.state = {
      color: ""
    };
    // We need to bind the keyword "this" to our method in order to
    // reference this component's state. We need to reference this
    // component's state in order to modify it.
    this.childFunction = this.childFunction.bind(this);
  }
  // When the child function is called, it calls the parent function
  // in order to retrieve a random color string in hex format.
  childFunction() {
    this.setState({
      color: this.props.parentFunction()
    });
  }
  render() {
    // We set the document object's body color to the current state's color.
    document.body.style.backgroundColor = this.state.color;
    return (
      <div>
        <h1>Hello World!</h1>
        {/*
         *
         * If you want to return a multi-line document you must wrap it in parentheses,
         * and there must be a tag wrapping any group of tags which do not have a
         * parent-child relationship, such as h1 and h2 in this example.
         *
         * Also notice how we're using curly braces to wrap javscript comments. Curly
         * braces serve the same function as ${} in javascript, wherein we can specify
         * a javascript expression to be evaluated. Comments of this form are also a
         * javascript expression.
         *
         */}
        <h2>
          Click on the button to change the background color to something
          random. <br />
          {/* We map the onClick pre-defined function for the button, to this.childFunction */}
          <button onClick={this.childFunction}>Click Me!</button>
        </h2>
      </div>
    );
  }
}
