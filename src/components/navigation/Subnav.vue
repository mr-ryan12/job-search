<template>
  <div class="main-container">
    <div class="sub-container">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="icon" />
        <span
          ><span class="num-of-results">{{ FILTERED_JOBS.length }}</span> job
          matches</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useFilteredJobs } from "@/store/composables.ts";

import useConfirmRoute from "@/composables/useConfirmRoute.js";

export default {
  name: "Subnav",
  setup() {
    const FILTERED_JOBS = useFilteredJobs();
    const onJobResultsPage = useConfirmRoute("JobResults");
    return { onJobResultsPage, FILTERED_JOBS };
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 4rem;
  background-color: #fff;
  border-bottom: 1px solid #dadcd0;
}

.sub-container {
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
}

.icon {
  margin-right: 0.75rem;
}

.num-of-results {
  color: #137333;
}
</style>
