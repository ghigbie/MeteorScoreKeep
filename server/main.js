import {Meteor} from "meteor/meteor";
import {Players} from "./../imports/api/players.js";

Meteor.startup( () => {
    Players.insert({
        name: "George",
        score: 3
    });
    console.log(Players.find().fetch());
});
