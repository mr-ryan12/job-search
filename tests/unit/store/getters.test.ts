// import { INCLUDE_JOB_BY_DEGREE } from "@/store/constants";
import getters from "@/store/getters";
import { createJob, createState, createDegree } from "./utils";

describe("Getters", () => {
  describe("UNIQUE_ORGANIZATIONS", () => {
    it("Finds unique organizations from list of jobs", () => {
      const jobs = [
        createJob({ organization: "Google" }),
        createJob({ organization: "Amazon" }),
        createJob({ organization: "Google" }),
      ];
      const state = createState({ jobs });
      const result = getters.UNIQUE_ORGANIZATIONS(state);
      expect(result).toEqual(new Set(["Google", "Amazon"]));
    });
  });

  describe("UNIQUE_JOB_TYPES", () => {
    const jobs = [
      createJob({ jobType: "Full-time" }),
      createJob({ jobType: "Part-time" }),
      createJob({ jobType: "Full-time" }),
    ];
    const state = createState({ jobs });
    const result = getters.UNIQUE_JOB_TYPES(state);
    expect(result).toEqual(new Set(["Full-time", "Part-time"]));
  });

  describe("UNIQUE_DEGREES", () => {
    it("extracts unique degree values", () => {
      const degrees = [
        createDegree({ degree: "Master's" }),
        createDegree({ degree: "Bachelor's" }),
      ];
      const state = createState({ degrees });
      const result = getters.UNIQUE_DEGREES(state);
      expect(result).toEqual(["Master's", "Bachelor's"]);
    });
  });

  describe("INCLUDE_JOB_BY_ORGANIZATION", () => {
    describe("When the user has not selected any organizations", () => {
      it("Should include job", () => {
        const state = createState({
          selectedOrganizations: [],
        });
        const job = { organization: "Google" };
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(
          createJob(job)
        );
        expect(includeJob).toBe(true);
      });

      it("Should identify if job is associated with given organizations", () => {
        const state = createState({
          selectedOrganizations: ["Google", "Microsoft"],
        });
        const job = createJob({ organization: "Google" });
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
        expect(includeJob).toBe(true);
      });
    });

    describe("INCLUDE_JOB_BY_JOB_TYPE", () => {
      describe("When the user has not selected any job types", () => {
        it("Includes job", () => {
          const state = createState({
            selectedJobTypes: [],
          });
          const job = createJob({ jobType: "Full-time" });
          const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
          expect(includeJob).toBe(true);
        });

        it("Identifies if job is associated with given job types", () => {
          const state = createState({
            selectedJobTypes: ["Full-time", "Part-time"],
          });
          const job = createJob({ jobType: "Part-time" });
          const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
          expect(includeJob).toBe(true);
        });
      });
    });
  });

  describe("INCLUDE_JOB_BY_JOB_TYPE", () => {
    describe("when the user has not selected any job types", () => {
      it("includes job", () => {
        const state = createState({
          selectedJobTypes: [],
        });
        const job = createJob({ jobType: "Full-time" });
        const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
        expect(includeJob).toBe(true);
      });
    });
  });

  describe("INCLUDE_JOB_BY_DEGREE", () => {
    describe("when the user has not selected any degrees", () => {
      it("includes job", () => {
        const state = createState({
          selectedDegrees: [],
        });
        const degree = createJob({ degree: "Master's" });
        const includeDegree = getters.INCLUDE_JOB_BY_DEGREE(state)(degree);
        expect(includeDegree).toBe(true);
      });

      it("identified if job is associated with given degrees", () => {
        const state = createState({
          selectedDegrees: ["Ph.D", "Associate"],
        });
        const degree = createJob({ degree: "Associate" });
        const includeJob = getters.INCLUDE_JOB_BY_DEGREE(state)(degree);
        expect(includeJob).toBe(true);
      });
    });
  });

  describe("FILTER_JOBS", () => {
    it("Filters jobs by organization, job type, and degree", () => {
      const INCLUDE_JOB_BY_ORGANIZATION = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_JOB_TYPE = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_DEGREE = jest.fn().mockReturnValue(true);
      const mockGetters = {
        INCLUDE_JOB_BY_ORGANIZATION,
        INCLUDE_JOB_BY_JOB_TYPE,
        INCLUDE_JOB_BY_DEGREE,
      };
      const job = createJob({ id: 1, title: "Best job ever" });
      const state = createState({
        jobs: [job],
      });
      const result = getters.FILTER_JOBS(state, mockGetters);
      expect(result).toEqual([job]);
      expect(INCLUDE_JOB_BY_ORGANIZATION).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_JOB_TYPE).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_DEGREE).toHaveBeenCalledWith(job);
    });
  });
});
