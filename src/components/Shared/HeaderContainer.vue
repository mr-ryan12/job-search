<template>
  <div class="header-container">
    <div class="text-container">
      <slot name="title">Sample Title</slot>
      <slot name="subtitle">Sample Subtitle</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderContainer",
});
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  border-bottom: 1px solid #dadcd0;
}

.text-container {
  margin-right: auto;
  margin-left: auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
  text-align: center;
}
</style>
