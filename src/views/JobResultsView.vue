<template>
  <JobFiltersSidebar />
</template>

<script>
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
export default {
  name: "JobResultsView",
  components: {
    JobFiltersSidebar,
  },
};
</script>

<style lang="scss" scoped>
.about {
  font-size: 3.75rem;
  line-height: 1;
  font-weight: 900;
}
</style>
