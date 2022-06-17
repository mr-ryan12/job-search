<template>
  <Accordion header="Organization">
    <div class="checkbox-container">
      <fieldset>
        <ul class="list-container">
          <li class="list-element">
            <input id="VueTube" type="checkbox" />
            <label for="VueTube" class="label">VueTube</label>
          </li>
          <li class="list-element">
            <input id="Vue and Me" type="checkbox" />
            <label for="Vue and Me" class="label">Vue and Me</label>
          </li>
          <li class="list-element">
            <input id="Et Vue Brute" type="checkbox" />
            <label for="Et Vue Brute" class="label">Et Vue Brute</label>
          </li>
          <li class="list-element">
            <input id="Vue and a half men" type="checkbox" />
            <label for="Vue and a half men" class="label"
              >Vue and a half men</label
            >
          </li>
          <li class="list-element">
            <input id="Vue stuff" type="checkbox" />
            <label for="Vue stuff" class="label">Vue stuff</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </Accordion>
</template>

<script>
import Accordion from "@/components/Shared/Accordion.vue";
export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    Accordion,
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
