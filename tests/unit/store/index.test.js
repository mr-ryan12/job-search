import { state, mutations } from "@/store";

describe("State", () => {
  it("Should have a login property", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false);
  });

  it("Should store job listings", () => {
    const startingState = state();
    expect(startingState.jobs).toEqual([]);
  });
});

describe("mutations", () => {
  describe("LOGIN_USER", () => {
    it("Should login the user", () => {
      const state = { isLoggedIn: false };
      mutations.LOGIN_USER(state);
      expect(state).toEqual({ isLoggedIn: true });
    });
  });
});
