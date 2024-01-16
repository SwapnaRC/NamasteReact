import { Sum } from "../sum";

describe("Sum test cases", () => {
  test("Sum of two numbers", () => {
    const result = Sum(3, 5);
    // Assertion   
    expect(result).toBe(8);
  });
});
