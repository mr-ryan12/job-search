<template>
  <div class="job-filter-sidebar">
    <section class="what-do-you-want-to-do-container">
      <div class="what-do-you-want-to-do-header">
        <h3 class="header-text">What do you want to do?</h3>
        <div class="action-button-container">
          <ActionButton text="Clear Filters" type="secondary" />
        </div>
      </div>

      <JobFiltersSidebarCheckboxGroup
        header="Degrees"
        :unique-values="uniqueDegrees"
        mutation="ADD_SELECTED_DEGREES"
        data-test="degrees-filter"
      />

      <JobFiltersSidebarCheckboxGroup
        header="Job Types"
        :unique-values="uniqueJobTypes"
        mutation="ADD_SELECTED_JOB_TYPES"
        data-test="job-types-filter"
      />

      <JobFiltersSidebarCheckboxGroup
        header="Organizations"
        :unique-values="uniqueOrganizations"
        :mutation="ADD_SELECTED_ORGANIZATIONS"
        data-test="organizations-filter"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

import {
  useUniqueJobTypes,
  useUniqueOrganizations,
  useUniqueDegrees,
} from "@/store/composables";
import {
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_DEGREES,
} from "@/store/constants";

export default defineComponent({
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueJobTypes = useUniqueJobTypes();
    const uniqueOrganizations = useUniqueOrganizations();
    const uniqueDegrees = useUniqueDegrees();

    return {
      uniqueJobTypes,
      uniqueOrganizations,
      uniqueDegrees,
      ADD_SELECTED_JOB_TYPES,
      ADD_SELECTED_ORGANIZATIONS,
      ADD_SELECTED_DEGREES,
    };
  },
});
</script>

<style lang="scss" scoped>
.job-filter-sidebar {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff;
  border-right: 1px solid #dadcd0;
  width: 24rem;
}

.what-do-you-want-to-do-container {
  padding-bottom: 1.25rem;
}

.what-do-you-want-to-do-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.header-text {
  font-weight: 900;
}

.action-button-container {
  display: flex;
  align-items: center;
  font-weight: 600;
}
</style>
