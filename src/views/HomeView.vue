<template>
  <Hero />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "@/components/JobSearch/Hero.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Hero,
  },
});
</script>

<style lang="scss" scoped>
.home {
  font-size: 3.75rem;
  line-height: 1;
  font-weight: 900;
}
</style>
