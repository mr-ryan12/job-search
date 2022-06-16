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

  describe("RECEIVE_JOBS", () => {
    it("Should receive jobs from API response", () => {
      const state = { jobs: [] };
      mutations.RECEIVE_JOBS(state, ["Job 1", "Job 2"]);
      expect(state.jobs).toEqual(["Job 1", "Job 2"]);
    });
  });
});
