const express = require("express");
// Set the port to the environment variable PORT, or 3000 if that variable is not defined.
// When working with IBM Cloud we are allowed to set environment variables, hence this is
// a best practice for such situations.
const port = process.env.PORT || 3000;
const app = express();

// This sets our index.html file as the default endpoint.
app.use("/", express.static(__dirname + "/"));

// This app allows JSON parsing.
app.use(express.json());
// This app allows url encoding.
app.use(
  express.urlencoded({
    extended: true
  })
);

// The server is started at the port specified at the top.
server = app.listen(port, () => {
  console.log("Server is up on port " + port);
});
