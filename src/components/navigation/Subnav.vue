<template>
  <div class="main-container">
    <div class="sub-container">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="icon" />
        <span
          ><span class="num-of-results">{{ filteredJobsLength }}</span> job
          matches</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import useConfirmRoute from "@/composables/useConfirmRoute.js";

export default {
  name: "Subnav",
  setup() {
    const store = useStore();
    const filteredJobsLength = computed(() => store.getters.FILTER_JOBS.length);

    const onJobResultsPage = useConfirmRoute("JobResults");

    return { onJobResultsPage, filteredJobsLength };
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
