//import "./../imports/utils";
import someDefault, {greetUser, name} from "./../imports/utils"; //this line imports named and default functions
import {add} from "./../imports/math";

console.log("Log from /client/main.js");
console.log(greetUser());
console.log(name);
console.log(add(7+7));
console.log(someDefault);
