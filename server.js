const express = require("express"),
    mysql = require("mysql"),
    exphbs = require("express-handlebars"),
    bodyParser = require("body-parser");

let app = express();
let port = process.env.PORT || 3000;

app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
let routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(port, function() {
    console.log("Server listening on http://localhost/:" + port);
})