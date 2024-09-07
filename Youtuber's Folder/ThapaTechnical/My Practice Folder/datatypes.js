// Primitive data types:-
/* 
   1. string
   2. number
   3. booleans
   4. null
   5. undefined
   6. big int
   7. symbol
*/

// Non-Primitive data types:-
/* 
   1. Array
   2. Object
   3. Date
*/

// How to convert a string to number:-

// 1st method:-

// let strToNum = "24";
// console.log(+strToNum);
// console.log(typeof +strToNum);

// 2nd method:-

// let str = "22";
// console.log(Number(str));
// console.log(typeof Number(str));

// 3rd method (If we have to convert a decimal string we have to use parseFloat() method instead of parseInt):-

// let str = "56";
// console.log(parseInt(str));
// console.log(typeof parseInt(str));

// let str = "56.67";
// console.log(parseFloat(str));
// console.log(typeof parseFloat(str));

// console.log(typeof " ");
// console.log(parseInt("123"));
// console.log(parseInt("123", 10));
// console.log(parseInt("   123   "));

// let num = "077"
// console.log(+num);
// console.log(parseInt("077"));

// console.log(parseInt("19.65"));

// Type Coersion in js:-

// console.log(false + false);   //0
// console.log(false + true);    //1
// console.log(true + true);     //2
// console.log(false - false);   //0
// console.log(false - true);    //-1
// console.log(true - false);    //1

// console.log("5" + 10); // 510
// console.log(10 - "5"); // 5
// console.log("5" - "10"); // -5

// const example = "Hello" + 7; // we can only concatinate string + number with + operator
// const example = "Hello" / 7;
// const example = "Hello" * 7;
// const example = "Hello" - 7;
// const example = "Hello" % 7;
// console.log(example);

// var result = 0.1 + 0.2;
// // var result = 0.2 + 0.2;
// console.log(result);
// console.log(result.toFixed(1));
