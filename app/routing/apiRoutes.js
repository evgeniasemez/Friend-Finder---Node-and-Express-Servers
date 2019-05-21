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
    // seatting a matched friend logic
    var closestMatch;
    var totalDifference = 0;
    var friends = friend;
    var currentClosest = 100;
    var currentUser = req.body;
    var count = 0;
    for (var i = 0; i < friends.length; i++) {
        var otherFriendScores = friends[i].scores;
        totalDifference = 0;
        for (var j = 0; j < otherFriendScores.length; j++) {
            totalDifference += Math.abs(otherFriendScores[j] - currentUser.scores[j]);
        }
        console.log("Friend " + friends[i].name + " got score " + totalDifference);
        if (totalDifference < currentClosest) {
            currentClosest = totalDifference;
            closestMatch = friends[i];
            console.log(closestMatch, " its here");
        }
    }
    friend.push(currentUser);
    res.send(closestMatch);

});

module.exports = router;