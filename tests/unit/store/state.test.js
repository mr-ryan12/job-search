import state from "@store";

describe("State", () => {
  it("Should have a login property", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false);
  });

  it("Should store job listings", () => {
    const startingState = state();
    expect(startingState.jobs).toEqual([]);
  });

  it("Stores organizations that the user would like to filter jobs by", () => {
    const startingState = state();
    expect(startingState.selectedOrganizations).toEqual([]);
  });
});
