<template>
  <main>
    <section class="hero">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1 border border-blue-700">
          1 column
        </div>
        <div class="col-start-2 col-span-5 border border-blue-700">
          <Headline />
        </div>
        <div class="col-start-7 col-span-5 border border-blue-700">
          5 columns
        </div>
        <div class="col-start-12 col-span-1 border border-blue-700">
          1 column
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Headline from "@/components/Headline.vue";

export default {
  name: "Hero",
  components: {
    Headline,
  },
};
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  height: 91.5vh;
  padding-top: 10px;
  padding-bottom: 80px;
  background-color: yellow;
}
</style>
