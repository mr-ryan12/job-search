import { useStore } from "vuex";
jest.mock("vuex");

import {
  useUniqueJobTypes,
  useUniqueOrganizations,
  useFilteredJobs,
  useFetchJobsDispatch,
} from "@/store/composables";
import { FETCH_JOBS } from "@/store/constants";

const useStoreMock = useStore as jest.Mock;

describe("composables", () => {
  describe("useFilteredJobs", () => {
    it("retrieves filtered jobs from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          FILTER_JOBS: [{ id: 1 }],
        },
      });
      const result = useFilteredJobs();
      expect(result.value).toEqual([{ id: 1 }]);
    });
  });

  describe("useUniqueJobtypes", () => {
    it("Retrieves unique job types from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_JOB_TYPES: new Set(["Full-time"]),
        },
      });

      const result = useUniqueJobTypes();
      expect(result.value).toEqual(new Set(["Full-time"]));
    });
  });

  describe("useUniqueOrganizations", () => {
    it("retrieves unique job organizations from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_ORGANIZATIONS: new Set(["Apple"]),
        },
      });

      const result = useUniqueOrganizations();
      expect(result.value).toEqual(new Set(["Apple"]));
    });
  });

  describe("useFetchJobsDispatch", () => {
    it("sends call to fetch jobs from API", () => {
      const dispatch = jest.fn();
      useStoreMock.mockReturnValue({
        dispatch,
      });
      useFetchJobsDispatch();
      expect(dispatch).toHaveBeenCalledWith(FETCH_JOBS);
    });
  });
});
