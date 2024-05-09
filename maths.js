export function add(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    throw new Error("that's not a number!");
  }
  const result = number1 + number2;
  return result;
}

// console.log("result: ", add(2, 2));
// console.log("result: ", add(2, "2"));
// console.log("result: ", add(2, "foo"));
// console.log("result: ", add(2, {}));
// console.log("result: ", add(2, []));
// console.log("result: ", typeof add([], []));
// console.log("result: ", add(2));

// let fname = "tony";
// fname = 30;

// console.log(fname);

// if (typeof result !== "number") {
//   throw new Error("that's not a number!");
// } else {
//   return number;
// }

// export { add };
