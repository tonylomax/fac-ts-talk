import { add } from "./maths";

describe("add", () => {
  test("should return a number", () => {
    const result = add(2, 2);

    expect(typeof result).toBe("number");
  });
});
