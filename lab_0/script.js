"use strict";

//alert( Hello, people );


let phrase = 'Hi, I am here';
alert(phrase);

let name = prompt('Enter you name, please','your name');

let messages = ['Hello, people', 5 + 6, 'Vasya'];
console.log(messages[0]);
console.log(messages[1]);
console.log(messages[2]);

console.log("------")


for (let a = 0; a < messages.length; a++) {
	console.log(messages[a]);
};

for (let t = 0; t < 5; t++) {
	alert (t);
};
 
for (let i = 0; i < 9; i = i + 2) {
  	console.log(i);
};

let order = {
	amount: 50,
	currency: 'USD',
	date: '2020-08-10' ,
	title: 'Bread',
	delivered: true,

}
 for (let field in order) {
 	console.log(field);
 	console.log(order[field]);
 }

for (let field in order) {
	console.log (`${field},${order[field]}`);
}
