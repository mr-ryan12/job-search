<template>
  <div class="accordion-container">
    <div
      class="header-container"
      data-test="clickable-area"
      @click="toggleContainer"
    >
      <h3 class="font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="carotIcon" />
    </div>

    <div v-if="isOpen" class="open-contents">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    carotIcon() {
      return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
    },
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
