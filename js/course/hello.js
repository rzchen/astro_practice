// let x = 10;
// let y = "100";

// // let userName = "John";
// // let greeting = "Hello, " + userName + ", how are you.";
// // let greeting2 = `Hello, ${userName}, how are you.`;

// x = 999;
// y = `test`; // grave, backtick

// let z = x + y;
// // console.log(z);

// function foo() {
//   x1 = 100;
// }
// foo();
// console.log(x1);

// // scope 變數作用域
// // global scope 全域變數
// // function scope 函式內區域變數
// // block scope 區塊內區域變數 ->

// for (let i = 0; i < 10; i++) {
// }

// // console.log(i);

// function bar(x) {
//   for (var j = 0; j < x; j++) {
//     // 1. 拿得到 j
//   }
//   // 2. 拿不到 j
// }
// // 3. 拿不到 j

// // j++ 
// // j = j + 1
// // j += 1

// console.log(userName);

// let userName = "John Doe" // Camel case

// console.log(userName);


// function greeting(name) {
//   // say a friendly hi
//   console.log("Hello world! This is" + name)
//   return ;

//   console.log("Hello world! This is" + name)
// }

// let result = greeting("Mary")
// console.log(result)


// 1000 8 
// 500 9

// function add(x, y) {
//   return x + y;
// }
// function multiply(x, y) {
//   return x * y;
// }

// function add1(i){ return i + 1}

// let res8 = [1, 2, 3, 4, 5].map(add1)
// // console.log(res8)

// console.log([[]] == false)

// let cartTotal = 1000;
// let ratio;

// function getRatio(total) {
//   if(total > 1000) {
//     return 0.8;
//   } else if (total > 500) {
//     return 0.9;
//   } else {
//     return 1;
//   }
// }

// console.log(cartTotal * getRatio(cartTotal))

// let array = [1, 2, 3, 4, 5, 6];
// // let res43 = array.pop();
// // console.log(res43)
// // console.log(array)
// let res64 = array.slice(0, 4);
// console.log(res64)
// console.log(array)



// let array = [1, 2, 3, 4, 5, 6];
// // let res43 = array.pop();
// let res64 = array.slice(0, 4);
// // console.log(res64)
// // console.log(array)

// let res50 = [0, 0, ...array, 7, 8, 9]
// console.log(res50)
// console.log(array)


// let areaCode = {
//   'us': '01',
//   'tw': '886',
//   'hk': '86'
// }
// let student = {
//   'name': 'John',
//   'age': 18,
//   'gender': 'M',
//   'favorite': ['music', 'eat']
// }

// let country = 'us'
// console.log(areaCode.hk)

// for(let x of res50) {
//   console.log(x)
// }

// baz(1000)

// // a lot of codes
// function baz(x){
//   var amount, total, qty;

//   //do something
//   amount = 100;
//   console.log(amount + x)
// }

// let lalala = function (x) {
//   console.log(`${x} in pot`)
// }

// let addOne = (x, y) => x + 1
// let addOne = x => x + 1

// for (var i = 0; i < 10; i++) {

//   setTimeout(function () {
//     console.log('這執行第' + i + '次');
//   }, 10);
// }

let x1 = 100;

function foo() {
  //let x1 = 100;

}
foo();
console.log(x1); //=> 100

