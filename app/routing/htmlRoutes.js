// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
// var app = express();
var router = express.Router();
var PORT = 3000;

// Sets up the Express app to handle data parsing
// router.use(express.urlencoded({ extended: true }));
// router.use(express.json());

// Basic route that sends the user first to the AJAX Page

router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    console.log("I am here");
});

router.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });

module.exports = router;