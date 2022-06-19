import axios from "axios";
jest.mock("axios");

import getJobs from "@/api/getJobs";

const axiosGetMock = axios.get as jest.Mock;

describe("getJobs", () => {
  beforeEach(() => {
    axiosGetMock.mockResolvedValue({
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
