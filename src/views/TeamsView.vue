<template>
  <HeaderContainer>
    <template #title>
      <h1>Teams</h1>
    </template>
    <template #subtitle>
      <h2>It's totally awesome so you should probably work here</h2>
    </template>
  </HeaderContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

export default defineComponent({
  name: "TeamsView",
  components: {
    HeaderContainer,
  },
});
</script>

<style lang="scss" scoped>
h1 {
  width: 100%;
  font-size: 2rem;
  font-weight: 400;
}

h2 {
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 300;
}
</style>
