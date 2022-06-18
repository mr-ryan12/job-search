<template>
  <Accordion header="Organization">
    <div class="checkbox-container">
      <fieldset>
        <ul class="list-container">
          <li
            v-for="organization in UNIQUE_ORGANIZATIONS"
            :key="organization"
            class="list-element"
          >
            <input
              :id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              type="checkbox"
              @change="selectOrganization"
            />
            <label :for="organization" class="label" data-test="organization">{{
              organization
            }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </Accordion>
</template>

<script>
import { mapGetters } from "vuex";
import Accordion from "@/components/Shared/Accordion.vue";
import { UNIQUE_ORGANIZATIONS } from "@/store";
export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    Accordion,
  },
  data() {
    return {
      selectedOrganizations: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_ORGANIZATIONS]),
    // setOrganizations() {
    //   return this.$store.getters.UNIQUE_ORGANIZATIONS;
    // },
  },
  methods: {
    selectOrganization() {},
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
