import nextElementInList from "@/utils/nextElementInList";

describe("Next element in list", () => {
  it("Locates element in list and returns the next element in list", () => {
    const list = ["A", "B", "C", "D", "E"];
    const value = "C";
    const result = nextElementInList<string>(list, value);

    expect(result).toBe("D");
  });

  describe("When element is the last in the list", () => {
    it("Should return the first element in the array", () => {
      const list = ["A", "B", "C", "D", "E"];
      const value = "E";
      const result = nextElementInList<string>(list, value);

      expect(result).toBe("A");
    });
  });
});
