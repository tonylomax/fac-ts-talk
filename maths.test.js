import { add } from "./maths";

describe("add", () => {
  test.only("should return a number", () => {
    const result = add(2, 2);

    expect(typeof result).toBe("number");
    expect(result).toBe(4);
  });

  test("should throw an error if something else is returned", () => {
    expect(() => add(2, "foo")).toThrow(Error);
  });

  test("should", () => {});

  test("just", () => {});

  test("work", () => {});
});
