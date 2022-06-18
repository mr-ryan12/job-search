import { computed } from "vue";
import { useStore } from "vuex";

import { FILTER_JOBS } from "./constants";

export const useFilteredJobs = () => {
  const store = useStore();
  return computed(() => store.getters[FILTER_JOBS]);
};