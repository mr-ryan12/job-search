import { actions, getters, mutations, state } from "@/store";
import getJobs from "@/api/getJobs";
jest.mock("@/api/getJobs");

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

  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("Updates organizations by user's filter choice", () => {
      const state = { selectedOrganizations: [] };
      mutations.ADD_SELECTED_ORGANIZATIONS(state, ["Org 1", "Org 2"]);
      expect(state.selectedOrganizations).toEqual(["Org 1", "Org 2"]);
    });
  });
});

describe("Getters", () => {
  it("Should have a set of organizations", () => {
    const state = {
      jobs: [
        { organization: "Google" },
        { organization: "Amazon" },
        { organization: "Google" },
      ],
    };
    const result = getters.UNIQUE_ORGANIZATIONS(state);
    expect(result).toEqual(new Set(["Google", "Amazon"]));
  });
});

describe("Actions", () => {
  beforeEach(() => {
    getJobs.mockResolvedValue([
      {
        id: 1,
        title: "Vue Developer",
      },
    ]);
  });

  it("Should make a request to fetch jobs", async () => {
    const context = { commit: jest.fn() };
    await actions.FETCH_JOBS(context);
    expect(getJobs).toHaveBeenCalled();
  });

  it("Should send message to save received jobs in store", async () => {
    const commit = jest.fn();
    const context = { commit };
    await actions.FETCH_JOBS(context);
    expect(commit).toHaveBeenCalledWith("RECEIVE_JOBS", [
      { id: 1, title: "Vue Developer" },
    ]);
  });
});
