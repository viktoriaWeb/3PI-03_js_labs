// створити ієрархію класів, мінімум в прототипному стилі
// продемонструвати поліморфізм (перевизначення методів)
//ієрархія класів es 6


'use strict';

//----------------------- Prototype  version
//функція конструктор, створили клас Month
function Month(name, numberOfDays){

//ініціалізація об єктів класу
	this.name = name; 
	this.numberOfDays = numberOfDays;
}

//створюємо методи і зберігаємо їх в поле prototype
Month.prototype.showMonthInfo = function(){
	console.log(`Month name : ${this.name}, Number of days:${this.numberOfDays}`);
}

//створюєм новий екземпляр класу Month
let myMonth = new Month('Isana', 1232);
myMonth.showMonthInfo()


//поліморфізм, наслідування, за допомогою call ми викликаємо конструктор Month з поточним this (наслідування),
// новий конструктор який унаслідував поля Month
function MonthPlanet (name, numberOfDays, planetName) {
	//викликаємо батьківський конструктор 
	Month.call(this, name, numberOfDays);
	this.planetName = planetName;
}

//унаслідували прототип(функції) базового класу Month
MonthPlanet.prototype = Object.create(Month.prototype);
//поліморфізм - різна реалізація для однакових методів
MonthPlanet.prototype.showMonthInfo = function(){
//викликаємо батьківську реалізацію, не змінюючи ім я і кількість аргументів, змінюємо поведінку 
	Month.prototype.showMonthInfo.call(this);
	console.log(`Planet: ${this.planetName}`);
}
let planetMonth = new MonthPlanet('Studen',200, 'Mars');

planetMonth.showMonthInfo()

//showMonthInfo - метод використовуєьться у обох класах, але ведуть вони себе по різному - поліморфізм


//-----------------------------ES6 version

class MonthES6{
	constructor (name, numberOfDays){
		this.name = name; 
		this.numberOfDays = numberOfDays;
	}
	showMonthInfo(){
		console.log(`Month name : ${this.name}, Number of days:${this.numberOfDays}`);
	}
}

class MonthPlanetES6 extends MonthES6 {
	constructor(name, numberOfDays, planetName){
		super(name, numberOfDays);
		this.planetName = planetName;

	}
	showMonthInfo(){
		MonthES6.prototype.showMonthInfo.call(this);
		console.log(`Planet: ${this.planetName}`);	
	}
}

let monthES6 = new MonthES6('Isana', 1232);
let planetMonthES6 = new MonthPlanetES6('Studen',200, 'Mars');


monthES6.showMonthInfo();
planetMonthES6.showMonthInfo();
