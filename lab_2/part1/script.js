'use strict';

let arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayInMonth = {
	January: 31,
	February: 28,
	March: 31,
	April: 30,
	May: 31,
	June: 30,
	July: 31,
	August: 31,
	September: 30,
	October: 31,
	November: 30,
	December: 31
}

console.log("\n Demonstrating forEach\n");


let appList = document.getElementById('app'); 

arr.forEach(function (item){
	let li = document.createElement('li'); 
	li.innerHTML = item;
	appList.appendChild(li);
});
arr.forEach((item, index) => console.log(`month: ${item}, position: ${index}`));

// changing items of array with foreach
let copyArr = Array.from(arr);
copyArr.forEach((item, index, arr) => arr[index] = item.toUpperCase());
copyArr.forEach(item => console.log(item));



// map
console.log("\n Demonstrating map\n");

let days = arr.map(function (month) {return dayInMonth[month];});

let charInMonth = arr.map(function(item) {return item.length;});

arr.forEach((item, index) => console.log(`Month ${item} has ${days[index]} and word length is ${charInMonth[index]}`));

//every

console.log("\n Demonstrating every\n");
let isLeapYear = days.every(numberOfDays => numberOfDays > 28);
console.log(`2021 is Leap year: ${isLeapYear}`);




//Filter
console.log("\n Demonstrating filter\n");


console.log(arr.filter(item => dayInMonth[item] === 31));


//some

console.log("\n Demonstrating some\n");

function month31days(month,index,arr) { 
	let nextMonth = arr[index + 1];
	return dayInMonth[month] === 31 && dayInMonth[nextMonth] === 31;
}
let is31days = arr.some(month31days);

console.log(`2 months in a raw have 31 days: ${is31days}`);


//reduce
console.log("\n Demonstrating reduce\n");

function reducer(accumulator, currentValue) {
	return accumulator + currentValue;
}
console.log(`Days in a year ${days.reduce(reducer)}`);

//reduce right

console.log("\n Demonstrating reduce right\n");


let word = "FireFox"
let reversedWord = word.split('').reduceRight((accumulator, currentValue) =>  accumulator + currentValue);
console.log(reversedWord);
