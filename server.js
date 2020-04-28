const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const User = require("./api/user");
const Chart = require("./api/chart");
const Matrix = require("./api/matrix");

const app = express();

const port = 4000;

app.use(cors());
app.use(bodyParser.json());

// Users Route
app.get("/api/users", (req, res) => {
  User.getData(res);
});

// Matrix Route
app.get("/api/matrix", (req, res) => {
  Matrix.getData(res);
});

// Charts route
app.get("/api/chart", (req, res) => {
  Chart.getData(res);
});

// listening to 4000
app.listen(port, () => {
  console.log(`Server Starts at ${port}`);
});
