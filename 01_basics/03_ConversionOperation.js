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
console.log(StringNumber);
console.log(typeof StringNumber);
