import React from "react"; //to import from  an npm module all you need to do specifiy the module name
import ReactDOM from "react-dom";
import {Meteor} from "meteor/meteor"; //meteor imports are imported with "metoer/[*** some meteor module name ****]"

const players = [{
	_id: 1,
	name: Lauren,
	score: 99
},{
	_id: 2,
	name: Cody,
	score: -1
}, {
	_id: 3,
	name: Mike,
	score: -50
}];

Meteor.startup( () => {
	let title = "Score Keep";
	let name = "Mike";
	let jsx = (
		<div>
			<h1>{title}</h1>
			<p>Hello {name}!</p>
			<p>Lorem ipsum dolor sit amet</p>
		</div>
	);
	ReactDOM.render(jsx, document.getElementById('app'));
});
