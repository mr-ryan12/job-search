import { computed } from "vue";
import { useStore } from "vuex";

import {
  FILTER_JOBS,
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANIZATIONS,
} from "./constants";

export const useFilteredJobs = () => {
  const store = useStore();
  return computed(() => store.getters[FILTER_JOBS]);
};

export const useUniqueJobTypes = () => {
  const store = useStore();
  return computed(() => store.getters[UNIQUE_JOB_TYPES]);
};

export const useUniqueOrganizations = () => {
  const store = useStore();
  return computed(() => store.getters[UNIQUE_ORGANIZATIONS]);
};
