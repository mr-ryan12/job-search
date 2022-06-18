import actions from "@/store/actions";

import getJobs from "@/api/getJobs";
jest.mock("@/api/getJobs");

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
