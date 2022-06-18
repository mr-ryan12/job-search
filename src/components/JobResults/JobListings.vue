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
import { mapActions, mapGetters } from "vuex";

import JobListing from "@/components/JobResults/JobListing.vue";
import { FETCH_JOBS, FILTER_JOBS } from "@/store/constants";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  computed: {
    ...mapGetters([FILTER_JOBS]),
    currentPage() {
      const pageString = this.$route.query.page || 1;
      return Number.parseInt(pageString);
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;

      return previousPage >= firstPage ? previousPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = Math.ceil(this.FILTER_JOBS.length / 10);

      return nextPage <= maxPage ? nextPage : undefined;
    },
    displayedJobs() {
      const pageNumber = this.currentPage;
      const firstIndex = (pageNumber - 1) * 10;
      const lastIndex = pageNumber * 10;

      return this.FILTER_JOBS.slice(firstIndex, lastIndex);
    },
  },
  async mounted() {
    this.FETCH_JOBS();
  },
  methods: {
    ...mapActions([FETCH_JOBS]),
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
