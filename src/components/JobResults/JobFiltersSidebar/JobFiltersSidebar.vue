<template>
  <div class="job-filter-sidebar">
    <section class="what-do-you-want-to-do-container">
      <div class="what-do-you-want-to-do-header">
        <h3 class="header-text">What do you want to do?</h3>
        <div class="action-button-container">
          <ActionButton text="Clear Filters" type="secondary" />
        </div>
      </div>
      <Accordion header="Things n stuff">
        <h3>Doin stuff with the things</h3>
      </Accordion>
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
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import Accordion from "@/components/Shared/Accordion.vue";
export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    Accordion,
  },
};
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
