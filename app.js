//requiring dependencies
const express = require("express");
 const bodyParser = require('body-parser');
 const dbconnect = require('./db/index');
// const cors = require("cors");

const app = express();

//app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api",  require("./modules/users_module/user_routes"));
app.use("/api",  require("./modules/project_module/project_routes"));
app.use("/api",  require("./modules/estimate_request_module/estimateRequest_routes"));
app.use("/api",  require("./modules/estimate_module/estimate_routes"));


const mongo_uri="mongodb://localhost:27017/estimates";
dbconnect.Connect(mongo_uri);

module.exports = app;
//requiring routes
//const projectsRouter = require("./modules/project_module/project_routes");
// const estimateRequestRouter = require("./modules/estimateRequest_module/estimateRequest_routes");

//const projectManagerRouter = require("./modules/user_module/user_routes");

//const estimateRouter = require("./modules/estimate_module/estimate_routes");

// app.use("/api", estimateRequestRouter);
// app.use("/api", estimateRouter);
//declaring server port

//Initializing express app

//express app middleware
