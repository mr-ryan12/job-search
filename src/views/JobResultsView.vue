<template>
  <div class="component-container">
    <JobFiltersSidebar />
    <JobListings />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
import JobListings from "@/components/JobResults/JobListings.vue";
export default defineComponent({
  name: "JobResultsView",
  components: {
    JobFiltersSidebar,
    JobListings,
  },
});
</script>

<style lang="scss" scoped>
.component-container {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
}
</style>
