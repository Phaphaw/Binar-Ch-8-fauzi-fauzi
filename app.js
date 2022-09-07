const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerJSON = require('./swagger.json');
const swaggerUI = require('swagger-ui-express');
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// accept request in form or JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/server/routes/v1/player.routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
});
