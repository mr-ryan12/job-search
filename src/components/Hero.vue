<template>
  <main>
    <section class="hero">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <Headline />
          <JobSearchForm />
        </div>
        <div class="col-start-7 col-span-5"></div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>

<script>
import Headline from "@/components/Headline.vue";
import JobSearchForm from "@/components/JobSearchForm.vue";

export default {
  name: "Hero",
  components: {
    Headline,
    JobSearchForm,
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
}
</style>
