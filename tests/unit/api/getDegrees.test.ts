import axios from "axios";
jest.mock("axios");

import getDegrees from "@/api/getDegrees";

const axiosGetMock = axios.get as jest.Mock;

describe("getJobs", () => {
  beforeEach(() => {
    axiosGetMock.mockResolvedValue({
      data: [
        {
          id: 1,
          degree: "Master's",
        },
      ],
    });
  });

  it("Should fetch degrees", async () => {
    await getDegrees();
    expect(axios.get).toHaveBeenCalledWith(
      "http://mytotallyfakeapi.com/degrees"
    );
  });

  it("Should extract degrees from response", async () => {
    const response = await getDegrees();

    expect(response).toEqual([
      {
        id: 1,
        degree: "Master's",
      },
    ]);
  });
});
