const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
//Custom Imports
const campaignController = require("./src/controllers/campaign");


//Constant Variables
const profile = "dev";
const port = 9000;

//Configure the server
const server = express();

//Configure the rest api logger

server.use(morgan(profile));

//Configure the JSON body parser for request.
server.use(bodyParser.json());

//Server port configuration.
server.listen(port, () => {
    console.log(`Node server is running on port: ${port}`);
});

//Register the controllers as routers.
server.use("/campaign", campaignController);