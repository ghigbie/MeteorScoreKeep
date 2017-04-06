import {Meteor} from "meteor/meteor";
import {Players} from "./../imports/api/players.js";

Meteor.startup( () => {
    // Players.insert({
    //     name: "Joe",
    //     score: 17
    // });
    console.log(Players.find().fetch());
});
