<template>
  <main>
    <section class="hero">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <Headline />
          <JobSearchForm />
        </div>
        <div class="col-start-7 col-span-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            alt="Vue Logo"
          />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>

<script>
import Headline from "@/components/JobSearch/Headline.vue";
import JobSearchForm from "@/components//JobSearch/JobSearchForm.vue";

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

img {
  width: 20rem;
  height: 100%;
  object-fit: contain;
  margin: 0;
  align-self: center;
  justify-self: center;
  margin-left: 6rem;
}
</style>
