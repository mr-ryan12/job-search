import getters from "@/store/getters";

describe("Getters", () => {
  describe("UNIQUE_ORGANIZATIONS", () => {});

  describe("FILTER_JOBS_BY_ORGANIZATIONS", () => {});

  describe("UNIQUE_JOB_TYPES", () => {});

  describe("FILTER_JOBS_BY_JOB_TYPES", () => {});

  describe("INCLUDE_JOB_BY_ORGANIZATION", () => {
    describe("When the user has not selected any organizations", () => {
      it("Should include job", () => {
        const state = {
          selectedOrganizations: [],
        };
        const job = { organization: "Google" };
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
        expect(includeJob).toBe(true);
      });

      it("Should identify if job is associated with given organizations", () => {
        const state = {
          selectedOrganizations: ["Google", "Microsoft"],
        };
        const job = { organization: "Google" };
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
        expect(includeJob).toBe(true);
      });
    });

    describe("INCLUDE_JOB_BY_JOB_TYPE", () => {
      describe("When the user has not selected any job types", () => {
        it("Includes job", () => {
          const state = {
            selectedJobTypes: [],
          };
          const job = { jobType: "Full-time" };
          const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
          expect(includeJob).toBe(true);
        });

        it("Identifies if job is associated with given job types", () => {
          const state = {
            selectedJobTypes: ["Full-time", "Part-time"],
          };
          const job = { jobType: "Part-time" };
          const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
          expect(includeJob).toBe(true);
        });
      });
    });
  });
});
