import axios from "axios";
jest.mock("axios");

import getJobs from "@/api/getJobs";

describe("getJobs", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: "Vue Developer",
        },
      ],
    });
  });

  it("Should fetch jobs", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith("http://mytotallyfakeapi.com/jobs");
  });

  it("Should extract jobs from response", async () => {
    const response = await getJobs();

    expect(response).toEqual([
      {
        id: 1,
        title: "Vue Developer",
      },
    ]);
  });
});
