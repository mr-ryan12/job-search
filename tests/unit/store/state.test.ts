import state from "@/store/state";

describe("State", () => {
  it("Should have a login property", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false);
  });

  it("Should store job listings", () => {
    const startingState = state();
    expect(startingState.jobs).toEqual([]);
  });

  it("Stores all degrees that jobs require", () => {
    const startingState = state();
    expect(startingState.degrees).toEqual([]);
  });

  it("Stores organizations that the user would like to filter jobs by", () => {
    const startingState = state();
    expect(startingState.selectedOrganizations).toEqual([]);
  });

  it("Should store job types", () => {
    const startingState = state();
    expect(startingState.selectedJobTypes).toEqual([]);
  });

  it("Stores degrees that the user would like to filter jobs by", () => {
    const startingState = state();
    expect(startingState.selectedDegrees).toEqual([]);
  });
});
