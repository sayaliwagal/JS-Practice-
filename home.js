console.log("hello");
// alert("yoo");

// inline comment

//  variables
var b = "smoothing";
console.log(b);

var someNumber = 45;
console.log(someNumber);


// var age =prompt('what is your age?');
// document.getElementById('someTxt').innerHTML = age;

//Numbers in JavaScript
var num1 = 10;
//Increment num1 by 1
num1++;

// Decrement num1 by 1
num1--;
console.log(num1)

//Divide, multiply* , remainder %
console.log(num1 % 6);

//Increment or  Decrement by any no you want 
num1 += 10;
console.log(num1);

/*  Function
1. Create a function
2. Call the function */


// 1. creating
//  function fun () {
//      alert('this is a function');
//  }

//  2. Call 
//  fun();
/* lets create a function that take in a name and says hello followed by your name 
Name: "Sayali"
Return: "Hello Sayali" 

*/

/* function greeting(yourName) {
    
    var result = "Hello" + " " +yourName; //string concatenation
    console.log(result);
}
var name = prompt('what is your name?')
greeting(name); */



// how do arguments work in function?
// HOw do we add 2 numbers together in a function?

function sumNum(num1, num2) {
    var result = num1 + num2;
    console.log(result);

}
sumNum(20, 30);


// while loops
/* var num = 0;

while (num < 100) {
    num += 1;
    console.log(num);
} */

// For loop 
/* for(let num=0; num<100; num++){
    console.log(num);
} */

// Data types 
let yourAge = 27; //number
let yourName = 'Bob'; //String
let name = { first: 'Jane', last: 'Doe' }; //Object
let groceries = ['apple', 'banna', 'oranges']; //Array
let nothing = null //null



// String in Javascrip (common methods)

let fruit = 'banana';
let moreFruits = 'banana\napple';    //new line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); //split by a comma
console.log(fruit.split(' ')); //split by character



// Arrays 
let fruits = ['banana', 'apple', 'orange', 'pineapple'];
fruits = new Array('banana', 'apple', 'orange', 'pineapple');

console.log(fruits[2]);

fruits[0] = 'peer';
console.log(fruits)

for (let i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]);
}

// Array common methods
console.log('to string', fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.pop(), fruits); //remove last item
console.log(fruits.push('Blackberries'), fruits);  //appends
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit'; //same as push
console.log(fruits);
fruits.shift(); //remove first element from an array
console.log(fruits);
fruits.unshift('kiwi'); //add first element to an array
console.log(fruits);

let vegetable = ['onion', 'tomatos', 'broccoli'];
let allGrocerice = fruits.concat(vegetable); //combine arrays
console.log(allGrocerice);
console.log(allGrocerice.slice(1, 4));
console.log(allGrocerice.reverse());
console.log(allGrocerice.sort());

let someNum = [5, 10, 20, 3, 4, 334.890, 100, 256, 321, 21, 1, 2];
console.log(someNum.sort(function (a, b) { return a - b }));     //sort  in ascending order
console.log(someNum.sort(function (a, b) { return b - a }));   //sort  in descending order


let emptyArray = new Array();
for (let num = 0; num <= 10; num++)
{
    emptyArray.push(num);
}
console.log(emptyArray);

// Objects in JavaScript
// Dictionaries in Python
 
let student = {
    first: 'Hrithik',
    last: 'Roshan',
    age: 37,
    height: 170,
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age;
    }

};
console.log(student.first)
console.log(student.last)
student.first = 'notHrithik'; //change value
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());


//Conditions, Control flows (if eles )
//18-35 is my target demographic
// let age = prompt('what is your age?');
// if((age >= 18) && (age <= 35)) {
//     status = 'target demo';
//     console.log(status);
// } else {
//     status = 'not my audience'
//     console.log(status);
// }

/* Switch statement
different between weekday vs Weekends 
day 0 --> Sunday
day 1 --> Monday
day 2 --> Tuesday
day 3 --> Wedneday
day 4 --> Thursday --> weekdays
day 5 --> Friday
day 6 --> Saturday
*/

switch(3) {
    case 0 :
        text = 'Weekend';
        break;
    case 5 :
        text = 'Weekend';
        break;
    case 6 :
        text = 'Weekend';
        break
    default:
        text = 'Weekday';


} 
console.log(text);

