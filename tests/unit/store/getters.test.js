import getters from "@/store/getters";

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
});
