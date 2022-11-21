var helicopter1 = "BlackHawk";
var helicopter2 = "bLaCkHawk";

var stringThree = "3";
var numberThree = 3;
console.log(helicopter1 == helicopter2); // output: false
console.log(helicopter1.toUpperCase() == helicopter2.toUpperCase()); // output: true

// Double equal signs will compare the value and doesn't care about the data type
console.log(
  "stringThree and numberThree with two equal",
  stringThree == numberThree
); // true

// 3 equals signs will compare Type and Value
console.log(
  "stringThree and numberThree with three equal",
  stringThree === numberThree
); // false

//  Not Operator
//  != only looks at teh value and doesn't care about the data type
console.log("Not equal helicopter", helicopter1 != helicopter2); //output: true
// prettier-ignore
console.log("Not equal stringThree and numberThree", stringThree !== numberThree) //output: true

// greater than

console.log("greater than", 10 > 2); // output: true
//  less than
console.log("less than", 10 < 2); // output: false

//