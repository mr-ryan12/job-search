<template>
  <div class="accordion-container" @click="toggleContainer">
    <div class="header-container">
      <h3>Organizations</h3>
      <font-awesome-icon
        v-if="!isOpen"
        :icon="['fas', 'angle-down']"
        class="down-icon"
      />
      <font-awesome-icon v-else :icon="['fas', 'angle-up']" class="up-icon" />
    </div>

    <div v-if="isOpen" class="open-contents">Child</div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleContainer() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.accordion-container {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 10px solid #f8f9fa;
  &:hover {
    cursor: pointer;
  }
}

.header-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.open-contents {
  width: 100%;
  margin-top: 1.25rem;
}
</style>
