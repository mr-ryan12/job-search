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
    <Spotlight class="spotlight">
      <template #default="slotProps">
        <RouterLink to="/jobs/results" class="spotlight-link">
          <img :src="slotProps.spotlight.img" class="spotlight-image" />
          <div class="spotlight-text-container">
            <h3 class="spotlight-title">
              {{ slotProps.spotlight.title }}
            </h3>
            <p class="spotlight-description">
              {{ slotProps.spotlight.description }}
            </p>
          </div>
          <RouterLink to="/jobs/results" class="spotlight-jobs-link"
            >See jobs</RouterLink
          >
        </RouterLink>
      </template>
    </Spotlight>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Headline from "@/components/JobSearch/Headline.vue";
import JobSearchForm from "@/components//JobSearch/JobSearchForm.vue";
import Spotlight from "@/components/JobSearch/Spotlight.vue";

export default defineComponent({
  name: "Hero",
  components: {
    Headline,
    JobSearchForm,
    Spotlight,
  },
});
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.hero {
  display: flex;
  flex-direction: column;
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

.spotlight {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 4rem;
}

.spotlight-link {
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  border-radius: 0.5rem;
  width: 18rem;
  height: 24rem;
  background-color: #f8f9fa;
}

.spotlight-text-container {
  height: 12rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 0.75rem;
}

.spotlight-title {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
}

.spotlight-description {
  margin-top: 0.75rem;
  font-size: 0.875rem;
}

.spotlight-jobs-link {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1rem;
  font-size: 0.875rem;
  color: #1967d2;
}

.spotlight-image {
  margin: 0;
  object-fit: contain;
}
</style>
