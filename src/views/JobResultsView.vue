<template>
  <div class="component-container">
    <JobFiltersSidebar />
    <JobListings />
  </div>
</template>

<script>
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
import JobListings from "@/components/JobResults/JobListings.vue";
export default {
  name: "JobResultsView",
  components: {
    JobFiltersSidebar,
    JobListings,
  },
};
</script>

<style lang="scss" scoped>
.component-container {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
}
</style>
