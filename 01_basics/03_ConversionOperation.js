let score = "33";

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
/*let score = 33abc if we print it then it will show NaN (not a number) because it is not a valid number
so for that we will use console.log(valueInNumber); it will show NaN

it is same as well as null and undefined but it is not same as null and undefined because null and undefined are data types but NaN is a value which is not a number
we can use example of that temperature story of hitesh sir in which he said that if we check temprature of a city and it is not available then it will show null but if temprature is available but it is not a number then it will show NaN

for boolean it will show 1 for true and 0 for false 
for string it will Nan
*/

let isLoggedIn = "shahzeb";
let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);
// 1=.true; 0=> false
//""=>false; "shahzeb"=>true

let someNumber = 33;
let StringNumber = String(someNumber);
// console.log(StringNumber);
// console.log(typeof StringNumber);

// ****************************Operations*******************************
let value = 3;
let negValue = -value;
//console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);

// let str1 = "Hello";
// let str2 = " World";
// let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log( (3 + 4) * 5 % 3);
// console.log(+true);
// console.log(+false);

// true=>1; false=>0
// +true=>1; +false=>0

// let num1,num2,num3;
// num1 = num2 = num3 = 2 + 2;
// console.log(num1,num2, num3);

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);
console.log(typeof gameCounter);

// ***************************************for understanding*********************************************
// let counter = 100;
counter++; // Adds 1. counter is now 101 (give then change
console.log(counter); // Prints 101

let score = 100;
++score; // Adds 1. score is now 101(change then give)
console.log(score); // Prints 101
