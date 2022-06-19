<template>
  <div class="accordion-container">
    <div class="header-container" data-test="clickable-area" @click="open">
      <h3 class="font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="carotIcon" />
    </div>

    <div v-if="isOpen" class="open-contents">
      <slot>
        <p>Whoops, somebody forgot to populate me!</p>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref, computed } from "vue";

export default defineComponent({
  name: "Accordion",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    const carotIcon = computed(() => {
      return isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"];
    });

    const open = () => {
      isOpen.value = !isOpen.value;
    };
    return { open, isOpen, carotIcon };
  },
});
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
