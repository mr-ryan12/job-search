import axios from "axios";
jest.mock("axios");

import getJobs from "@/api/getJobs";

describe("getJobs", () => {
  it("Should fetch jobs", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith("http://mytotallyfakeapi.com/jobs");
  });
});
