"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_1 = require("./todo");
function add(number1, number2) {
    var result = number1 + number2;
    return result;
}
// console.log("result:", add(2, 2));
// console.log("result:", add(2, "2"));
// console.log("result:", add(2, "foo"));
// console.log("result:", add(2, {}));
// console.log("result:", add(2, []));
// console.log("result:", add(2));
(0, todo_1.main)();
var something = "Hello World!";
something = 23;
something = true;
console.log({ something: something });
var name = "tony";
console.log(add(name, 2));
