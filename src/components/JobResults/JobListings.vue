<template>
  <main class="job-listings">
    <ol>
      <JobListing />
      <JobListing />
      <JobListing />
      <JobListing />
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
  mounted() {
    const url = "http://localhost:3000/jobs";

    axios.get(url).then((response) => {
      this.jobs = response.data;
      console.log(this.jobs);
    });
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
