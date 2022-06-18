import getters from "@/store/getters";

describe("Getters", () => {
  describe("UNIQUE_ORGANIZATIONS", () => {
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

  describe("Filter jobs by organization", () => {
    it("Identifies jobs with given organizations", () => {
      const state = {
        jobs: [
          { organization: "Google" },
          { organization: "Amazon" },
          { organization: "Microsoft" },
        ],
        selectedOrganizations: ["Google", "Microsoft"],
      };

      const fitleredJobs = getters.FILTER_JOBS_BY_ORGANIZATIONS(state);
      expect(fitleredJobs).toEqual([
        { organization: "Google" },
        { organization: "Microsoft" },
      ]);
    });

    describe("Should display all jobs without any selected organizations", () => {
      it("Should return all jobs", () => {
        const state = {
          jobs: [
            { organization: "Google" },
            { organization: "Amazon" },
            { organization: "Microsoft" },
          ],
          selectedOrganizations: [],
        };

        const fitleredJobs = getters.FILTER_JOBS_BY_ORGANIZATIONS(state);
        expect(fitleredJobs).toEqual([
          { organization: "Google" },
          { organization: "Amazon" },
          { organization: "Microsoft" },
        ]);
      });
    });
  });

  describe("UNIQUE_JOB_TYPES", () => {
    it("Should have a set of job types", () => {
      const state = {
        jobs: [
          { jobType: "Full-time" },
          { jobType: "Part-time" },
          { jobType: "Full-time" },
        ],
      };
      const result = getters.UNIQUE_JOB_TYPES(state);
      expect(result).toEqual(new Set(["Full-time", "Part-time"]));
    });
  });
});
