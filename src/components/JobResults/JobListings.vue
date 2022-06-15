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
  </main>
</template>

<script>
import axios from "axios";

import JobListing from "@/components/JobResults/JobListing.vue";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  data() {
    return {
      jobs: [],
    };
  },
  computed: {
    displayedJobs() {
      return this.jobs.slice(0, 10);
    },
  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/jobs");
    this.jobs = response.data;
  },
};
</script>

<style lang="scss" scoped>
.job-listings {
  flex: 1 1 auto;
  padding: 2rem;
  background-color: #f8f9fa;
}
</style>
