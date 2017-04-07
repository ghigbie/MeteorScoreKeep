import {Meteor} from "meteor/meteor";
import {Players} from "./../imports/api/players.js";

Meteor.startup( () => {
    // Players.insert({
    //     name: "Joe",
    //     score: 17
    // });
    // console.log(Players.find().fetch());

    let numbers = [9, 99, 4, 56];
    let newNumbers = () => {
        console.log(numbers[1]);
    }
    newNumbers();
}
