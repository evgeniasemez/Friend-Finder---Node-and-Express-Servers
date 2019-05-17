// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var friend = require('../data/friends');

// Sets up the Express App
// =============================================================
// var app = express();
var router = express.Router();
var PORT = 3000;

// Sets up the Express app to handle data parsing
// router.use(express.urlencoded({ extended: true }));
// router.use(express.json());

// Basic route that sends the user first to the AJAX Page

router.get("/friends", function (req, res) {
    return res.json(friend);
});

router.post("/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newcharacter = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newcharacter);

    // characters.push(newcharacter);

    res.json(newcharacter);

    //  compare the difference between current user's scores against those from other users
    // Add up the differences to calculate the totalDifference
    // The closest match will be the user with the least amount of difference
    // Once you've found the current user's most compatible friend, display the result as a modal pop-up.
    // display the name and a photo of the user match
    // if current is less than existing: 

});

module.exports = router;