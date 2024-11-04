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
    id: 1,
    title: "do a FAC talk",
    description: "find gifs",
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
    console.log(todo1 instanceof Object);
};
exports.main = main;
(0, exports.main)();
