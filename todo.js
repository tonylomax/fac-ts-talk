"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
var todo1 = {
    title: "do a FAC talk",
    description: "find gifs",
    foo: "bar",
};
var updateTodo = function (todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
};
var main = function () {
    var newTodo = updateTodo(todo1, {
        title: "Update fac ts talk for next time",
        id: 7,
    });
    console.log({ todo1: todo1 });
    console.log({ newTodo: newTodo });
};
exports.main = main;
// const name = "tony" as unknown as number;
// Excess Property Checks
// In this case, Typescript won’t check for excess properties as type Person is a subset of the type inferred for variable x, which is inferred to include all properties in Person plus age. This is known as duck-typing or structural typing
// "If it walks like a duck and it quacks like a duck, then it must be a duck"
// const todo2 = {
//   title: "learn python",
//   description: "🐍",
//   id: 2,
// };
