<template>
  <Accordion header="Job Types">
    <div class="checkbox-container">
      <fieldset>
        <ul class="list-container">
          <li
            v-for="jobType in uniqueJobTypes"
            :key="jobType"
            class="list-element"
          >
            <input
              :id="jobType"
              v-model="selectedJobTypes"
              :value="jobType"
              type="checkbox"
              :data-test="jobType"
              @change="selectJobType"
            />
            <label :for="jobType" class="label" data-test="job-type">{{
              jobType
            }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </Accordion>
</template>

<script>
import { ref } from "vue";
// import { mapMutations } from "vuex";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { useUniqueJobTypes } from "@/store/composables";
import { ADD_SELECTED_JOB_TYPES } from "@/store/constants";

import Accordion from "@/components/Shared/Accordion.vue";

export default {
  name: "JobFiltersSidebarJobTypes",
  components: {
    Accordion,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const selectedJobTypes = ref([]);
    const uniqueJobTypes = useUniqueJobTypes();

    const selectJobType = () => {
      store.commit(ADD_SELECTED_JOB_TYPES, selectedJobTypes.value);
      router.push({ name: "JobResults" });
    };

    return { selectedJobTypes, uniqueJobTypes, selectJobType };
  },
};
</script>

<style lang="scss" scoped>
.checkbox-container {
  margin-top: 1.25rem;
}

.list-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.list-element {
  width: 50%;
  height: 2rem;
}

.label {
  margin-left: 1rem;
}
</style>
