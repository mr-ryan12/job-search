import { computed } from "vue";
import { useStore } from "vuex";

import {
  FILTER_JOBS,
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANIZATIONS,
  FETCH_JOBS,
} from "./constants";

import { Job } from "@/api/types";

// Getters
export const useFilteredJobs = () => {
  const store = useStore();
  return computed<Job[]>(() => store.getters[FILTER_JOBS]);
};

export const useUniqueJobTypes = () => {
  const store = useStore();
  return computed<Set<string>>(() => store.getters[UNIQUE_JOB_TYPES]);
};

export const useUniqueOrganizations = () => {
  const store = useStore();
  return computed<Set<string>>(() => store.getters[UNIQUE_ORGANIZATIONS]);
};

// Actions
export const useFetchJobsDispatch = () => {
  const store = useStore();
  store.dispatch(FETCH_JOBS);
};
