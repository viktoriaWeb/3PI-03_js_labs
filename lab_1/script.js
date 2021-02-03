"use strict";

/*
Завдання до лабораторної роботи;
1) оголошення функції
2) анонімні функції
3) function expression
4) дефолтні значення параметрів
5) стрілочні функції
6) замикання
7) продемонструвати використання модулів, в т ч навісити обробники подій на html елементи,
зробити це через замикання і через анонімну ф-у яка замикає на собі певні змінні
*/

//1) оголошення функції/function declaration
function addition(a, b){return a + b;}
let result = addition(1, 2);
console.log(result);


//2)  анонімні функції, immediate 
//Immediately Invoked Function Expression
(function() {
  let message = "Good morning"; 
  console.log(message);
})();

//3)function expression

const greet = function (greeting,person){
	return  `${greeting} ${person}, how are you?`;
};
console.log(greet("Good morning", "Peter"));

//4) дефолтні значення параметрів

function square(x = 5){
	return x**2;
};

function cube(x = 2) {
	return x**3;
};
console.log();
console.log(`The square & cube of x is ${square()} & ${cube()}`);



// 5) стрілочні функції /arrow functions

const names = ['James', 'Alex', 'Peet']; 
const number_caracters = names.map (name => `${name} has ${name.length} characters`);

number_caracters.forEach(name => console.log(name));

//6) closures/замикання

function makeFunc(name) {
  let someName = 'Mozilla';

  function displayName() {  	
    alert(`Arg: ${name} variable of makeFunc ${someName}`);
    
  }

  return displayName;
}

let myFunc = makeFunc('some name');


console.log(myFunc());


//7) pattern module

let makeDrill = function(){
	let isOn = false; 
	let drillBitDiam =0;
	return {
		switchOn: function(){
			isOn = true;
			alert("Drill turned on");
		},

		switchOff: function(){
			isOn = false; 
			alert("Drill turned off");
		},
		work: function(){
			if (drillBitDiam > 0 && isOn === true) alert("VrumVrum") ;
			else alert("insert the bit or enable drill");

		},
		insertDrillBit: function(drillBit){
			drillBitDiam = drillBit;
			 console.log(`Drill bit with diam: ${drillBit} inserted`);
		}
	}
};
let newDrill = makeDrill();

const drillSelector = document.getElementById("drill-bit-select");
drillSelector.addEventListener(
	'change', function(){
		newDrill.insertDrillBit(this.value);
		console.log(this);
	});
