/****************************************************************************************************
 *
 * This is a hello world app, to get you started on ReactJS.
 *
 ****************************************************************************************************
/****************************************************************************************************
 * 
 * First off, we need to create a component that we are going to
 * pass into the DOM renderer in order to view it on our index page.
 * Things to note:
 *     1. JSX is a compiled language. You will not need the JSX files on your server.
 *        you will only need them in your codebase.
 *     2. When you compile JSX files, you obtain javascript files, which you can then
 *        reference from your index page to render whatever you need.
 *        These, you do need on your server.
 *     3. You can think of JSX syntax as a hybrid javascript/html syntax, which allows
 *        you to handle both, the rendering code, and logic all in one place.
 * 
 ****************************************************************************************************/

/****************************************************************************************************
 *
 * The first import allows us to create the React components.
 * These are then rendered via the second import's renderer.
 * You can think of the components as the recipe for a cake,
 * and the renderer as the person baking the cake.
 * They are currently commented out because we're grabbing our
 * dependencies from html script tags, which point to external
 * script files.
 *
 * In case you are curious: DOM stands for Document Object Model, where
 * the document object is the owner of all other objects in your web page.
 * The document object represents your web page. If you want to access
 * any element in an HTML page, you always start with accessing the document object.
 *
 ****************************************************************************************************/
// import React from "react";
// import ReactDOM from "react-dom";

/****************************************************************************************************
 *
 * Now we define the React Component which we will render.
 * This can have any name, as long as it extends React.Component.
 *
 ****************************************************************************************************/
class RenderedComponent extends React.Component {
  // The constructor props inside of child components can be used to
  // pass data from the parent as demonstrated in child.jsx.
  constructor(props) {
    super(props);
  } // This is a function that we will pass into the child in order
  // to get a random color. It was not necessary to have defined
  // it in the parent, but is was implemented here for pedagogical
  // reasons; namely: we'd like to demonstrate how to pass data
  // into children components.


  grabRandomColor(color) {
    // We want the colors to be bright, so we add an offset of 127
    // and a max of 255 as colors range from 0-255.
    let red = Math.round(Math.random() * 128 + 127).toString(16);
    let blue = Math.round(Math.random() * 128 + 127).toString(16);
    let green = Math.round(Math.random() * 128 + 127).toString(16); // We either return a specified color, or a random one.

    return color ? color : "#" + red + blue + green;
  } // This is the function that the renderer uses to "bake the cake".


  render() {
    // We are passing the function "grabRandomColor" into the parameter "parentFunction"
    return React.createElement(Child, {
      parentFunction: this.grabRandomColor
    });
  }

} // This is how we actually render the component on the index page.
// We will always need to add a forward slash when closing our tags,
// even if we're not wrapping our tags around another object.


ReactDOM.render(React.createElement(RenderedComponent, null), document.getElementById("app"));