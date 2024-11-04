import { main } from "./todo";

function add(number1: number, number2: number): number {
  const result = number1 + number2;
  return result;
}

// console.log("result:", add(2, 2));
// console.log("result:", add(2, "2"));
// console.log("result:", add(2, "foo"));
// console.log("result:", add(2, {}));
// console.log("result:", add(2, []));
// console.log("result:", add(2));
main();

let something = "Hello World!";
something = 23;
something = true;
console.log({ something });

const name = "tony" as unknown as number;
console.log(add(name, 2));
