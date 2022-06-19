<template>
  <main class="job-listings">
    <ol>
      <JobListing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      />
    </ol>
    <div class="page-link-container">
      <div class="page-link-sub-container">
        <p class="page-link">Page {{ currentPage }}</p>
        <div class="router-link-container">
          <RouterLink
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="previous"
            data-test="previous-page-link"
            >Previous</RouterLink
          >
          <RouterLink
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="next"
            data-test="next-page-link"
            >Next</RouterLink
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

import useCurrentPage from "@/composables/useCurrentPage.js";
import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages.js";
import { useFilteredJobs } from "@/store/composables";
import { FETCH_JOBS } from "@/store/constants";
import JobListing from "@/components/JobResults/JobListing.vue";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  setup() {
    const store = useStore();
    const fetchJobs = () => store.dispatch(FETCH_JOBS);
    onMounted(fetchJobs);

    const filteredJobs = useFilteredJobs();

    const currentPage = useCurrentPage();

    const maxPage = computed(() => Math.ceil(filteredJobs.value.length / 10));

    const { previousPage, nextPage } = usePreviousAndNextPages(
      currentPage,
      maxPage
    );

    const displayedJobs = computed(() => {
      const pageNumber = currentPage.value;
      const firstIndex = (pageNumber - 1) * 10;
      const lastIndex = pageNumber * 10;
      return filteredJobs.value.slice(firstIndex, lastIndex);
    });

    return { previousPage, nextPage, currentPage, displayedJobs };
  },
};
</script>

<style lang="scss" scoped>
.job-listings {
  flex: 1 1 auto;
  padding: 2rem;
  background-color: #f8f9fa;
}

.page-link-container {
  margin-top: 1.75rem;
  margin-right: auto;
  margin-left: auto;
}

.page-link-sub-container {
  display: flex;
  flex-wrap: nowrap;
}

.page-link {
  font-size: 0.875rem;
  line-height: 1.25rem;
  flex-grow: 1;
}

.router-link-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.previous,
.next {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: #1967d2;
}
</style>
