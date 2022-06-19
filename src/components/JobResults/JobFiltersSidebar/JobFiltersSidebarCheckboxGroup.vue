<template>
  <Accordion :header="header">
    <div class="checkbox-container">
      <fieldset>
        <ul class="list-container">
          <li v-for="value in uniqueValues" :key="value" class="list-element">
            <input
              :id="value"
              v-model="selectedValues"
              :value="value"
              type="checkbox"
              :data-test="value"
              @change="selectValue"
            />
            <label :for="value" class="label" data-test="value">{{
              value
            }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </Accordion>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import Accordion from "@/components/Shared/Accordion.vue";

export default {
  name: "JobFiltersSidebarCheckboxGroup",
  components: {
    Accordion,
  },
  props: {
    header: {
      type: String,
      required: true,
    },
    uniqueValues: {
      type: Set,
      required: true,
    },
    mutation: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const selectedValues = ref([]);

    const selectValue = () => {
      store.commit(props.mutation, selectedValues.value);
      router.push({ name: "JobResults" });
    };

    return { selectedValues, selectValue };
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
