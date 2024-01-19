import { sum } from '../sum'

test("should render the sum", () => {
  const result = sum(3, 5);
  // Assertion
  expect(result).toBe(8);
});
