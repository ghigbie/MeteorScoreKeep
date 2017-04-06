import React from "react"; //to import from  an npm module all you need to do specifiy the module name
import ReactDOM from "react-dom";
import {Meteor} from "meteor/meteor"; //meteor imports are imported with "metoer/[*** some meteor module name ****]"
import {Tracker} from "meteor/tracker";
import {Players} from "./../imports/api/players";

const renderPlayers = (players) => {
	return players.map((player) => {
		let points = "points";
		if(player.score === 1){
			points = "point"
		}
		return <p key={player._id}>{player.name} has {player.score} {points}.</p>; //each element needs a key property or a warning is thrown
	});
}

Meteor.startup( () => {
	Tracker.autorun(() => {
		let players = Players.find().fetch();
		let title = "Score Keep";
		let name = "Mike";
		let jsx = (
			<div>
				<h1>{title}</h1>
				<p>Hello {name}!</p>
				<p>Lorem ipsum dolor sit amet</p>
				{renderPlayers(players)}
			</div>
		);
		ReactDOM.render(jsx, document.getElementById('app'));
	});
});
