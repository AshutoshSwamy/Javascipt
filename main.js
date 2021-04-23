//How to log anything ih the console
console.log('Hello world!');

//How to create a alert when the page is opened
//alert('Hey there!')

//How to write a comment inline
//console.log('Hello world!');

/*How to write a multiline comment
    a
    b
    c
*/

//Variables
var word = 'Basket';
console.log(word);

var number = 3;
console.log(number);

//How to get an element from the HTML file by using its ID and edit by using JS
document.getElementById('header1').innerHTML = 'Hello there!';

var sentence = 'Old is Gold!';
document.getElementById('header2').innerHTML = sentence;

//How to make a prompt and store its input in a variable and display that variable as a element
//var name = prompt('What is your name?');
//document.getElementById('header3').innerHTML = name;

//Numbers
console.log(5 + 5);
console.log(5 - 5);
console.log(5 * 5);
console.log(5 / 5);
console.log(5 % 1);

var num1 = 10;
num1 = num1 + 1;
console.log(num1);

var num1a = 10;
num1a++;
console.log(num1a);

var num2 = 12;
num2 = num2 - 1;
console.log(num2);

var num2a = 12;
num2a--;
console.log(num2a);

var num3 = 12;
num3 = num3 * 2;
console.log(num3);

var num4 = 12;
num4 = num4 / 6;
console.log(num4);

var num5 = 12;
num5 = num5 % 4;
console.log(num5);

var num6 = 10;
num6 += 10;
console.log(num6);

var num6a = 10;
num6a -= 10;
console.log(num6a);

var num6b = 10;
num6b *= 10;
console.log(num6b);

var num6b = 10;
num6b /= 10;
console.log(num6b);

var num6b = 10;
num6b %= 10;
console.log(num6b);

/*Function
    1. Create a function
    2. Call that function
*/

//Creating a function
function test() {
    //alert('This a function!');
}
//Calling that function
test();

/*Creating a function where it gives us a prompt and 
    stores its input in a variable and then sends an
    alert about your imput in the prompt

    For example
    Name: 'Ashutosh'
    Result: 'Hello Ashutosh'
*/

function test2() {
    //var name = prompt('What is your name?');
    //var result = 'Hello' + ' ' + name;
    //alert(result);
}
test2()

//How arguments work in a function
//Request for the arguments
function test3(n1, n2) {
    //var result = n1 + n2;
    //alert('Its' + ' ' + result);
}
//Assign the arguments
test3(15, 15);

//While loops
var num = 0;
while (num < 100) {
    num += 1;
    //console.log(num);
}

//For loops
for (let num = 0; num < 100; num++) {
    //console.log(num);
}

//Date Types in JS
let age = 14; //Number
let name = 'Ashutosh'; //String
let fullname = {first: 'Ashutosh', last: 'Swamy'}; //Object
let truth = false; //Boolean
let groceries = ['banana', 'apple', 'oranges']; //Array
let random; //Undefined
let nothing = null; //Null value

//String Methods in JS
let fruit = 'banana';
let moreFruits = 'banana\napple'; //New line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase('nan'));
console.log(fruit.toLowerCase());
console.log(fruit.charAt(3));
console.log(fruit[5]);
console.log(fruit.split(''));

//Arrays in JS
let fruits = ['banana', 'orange', 'pineapple', 'mango'];
let fruits2 = new Array('banana', 'orange', 'pineapple', 'mango');
console.log(fruits[3]); //Access the index value at 3

fruits[1] = 'kiwi'; //Change the index valua at 1
console.log(fruits);

//Array with a for loop
for (let i = 0;  i < fruits.length ; i++) {
    console.log(fruits[i]);
}

//Array Methods in JS
console.log(fruits.toString()); //Converts an array to string
console.log(fruits.join(' * ')); //Joins every object with *
console.log(fruits.pop(), fruits); //Removes the last object from the array
console.log(fruits.push('blackberries'), fruits); //Adds the new object to the array
console.log(fruits[4]) //Shows undefined because that index doesn't exist

let numbers = ['2', '2223', '223', '312', '4', '212', '98', '67'];
console.log(numbers.sort(function(a, b) {return a-b})); //Sorts the number in ascending order
console.log(numbers.sort(function(a, b) {return b-a})); //Sorts the number in descending order

//Pushing objects into the array
let empty = new Array();
for (let num = 0; num <= 10; num++) {
    empty.push(num);
}
console.log(empty);

//Objects in JS
let student = {
    first: 'Ashutosh',
    last: 'Swamy',
    age: '14',
    height: '5 ft',
    //Converting this data into a function
    studentInfo() {
        return this.first + '\n' + this.last + '\n' + this.age + '\n' + this.height;
    }
}
//console.log(student.first);
//student.first = 'Vishwanath'; //Change the value of an object
//console.log(student.first);
//student.age++; //Incrementing the value of an object
//console.log(student.age);
console.log(student.studentInfo())

//Conditions in JS (if, else)
// || OR
// && AND
//Creating a prompt and storing its input in a variable and deciding the audience according on their input
var question = prompt('What is your age?');
if(question >= 18) {
    console.log('You are a adult!');
} else {
    console.log('You are a teen!');
}