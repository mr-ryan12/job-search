<template>
  <div class="job-filter-sidebar">
    <section class="what-do-you-want-to-do-container">
      <div class="what-do-you-want-to-do-header">
        <h3 class="header-text">What do you want to do?</h3>
        <div class="action-button-container">
          <ActionButton text="Clear Filters" type="secondary" />
        </div>
      </div>
    </section>
    <Accordion />
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
</style>
