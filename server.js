var express = require("express");
var path = require("path");
var keys = require("./app/routing/htmlRoutes.js");
var appRoutes = require('./app/routing/apiRoutes.js');


// Sets up the Express App
// =============================================================
var app = express();
// var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// setting a background image
app.use(express.static('public'));
// console.log(keys);

app.use('/api', appRoutes);
app.use('/', keys);




var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {

    // app.get("/", function (req, res) {
    //     // res.json(path.join(__dirname, "public/index.html"));
    //     console.log("app.get('/' worked")
    //     res.sendFile(path.join(__dirname, "app/public/home.html"));
    // });
})

