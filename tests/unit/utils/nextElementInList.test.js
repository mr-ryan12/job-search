import nextElementInList from "@/utils/nextElementInList";

describe("Next element in list", () => {
  it("Locates element in list and returns the next element in list", () => {
    const list = ["A", "B", "C", "D", "E"];
    const value = "C";
    const result = nextElementInList(list, value);

    expect(result).toBe("D");
  });
});
