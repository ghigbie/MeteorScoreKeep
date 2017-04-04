import React from "react"; //to import from  an npm module all you need to do specifiy the module name
import ReactDOM from "react-dom";
import {Meteor} from "meteor/meteor"; //meteor imports are imported with "metoer/[*** some meteor module name ****]"

Meteor.startup( () => {
	let name = "Mike";
	let jsx = <p>Hello {name}!</p>;
	ReactDOM.render(jsx, document.getElementById("app"));
});