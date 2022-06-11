import { evenOrOdd, multiplyTwoNums } from "@/playground.js";

describe("basic math", () => {
  it("adds two numbers", () => {
    expect(1 + 1).toBe(2);
  });

  it("subtracts two numbers", () => {
    expect(5 - 3).toBe(2);
  });

  describe("Even or odd", () => {
    describe("When the number is even", () => {
      it("Should indicate it's even", () => {
        const number = 6;
        const result = evenOrOdd(number);

        expect(result).toBe("even");
      });
    });
    describe("When the number is odd", () => {
      it("Should indicate it's odd", () => {
        const number = 5;
        const result = evenOrOdd(number);

        expect(result).toBe("odd");
      });
    });
  });

  describe("Multiply", () => {
    it("Should multiply two numbers", () => {
      const num1 = 2;
      const num2 = 2;
      const result = multiplyTwoNums(num1, num2);

      expect(result).toBe(4);
    });
  });
});
