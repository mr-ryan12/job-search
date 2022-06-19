<template>
  <li class="list-container">
    <RouterLink :to="jobPageLink" class="link" data-test="job-page-link">
      <div class="job-title-container">
        <h2 class="job-title">
          {{ job.title }}
        </h2>
        <div class="company-info">
          <div class="company-title">
            <span>{{ job.organization }}</span>
          </div>
          <div>
            <span
              v-for="location in job.locations"
              :key="location"
              class="location-text"
              >{{ location }}</span
            >
          </div>
        </div>
      </div>
      <div class="change-this">
        <div class="qualifications-container">
          <h3 class="qualifications-title">Qualifications:</h3>
          <div>
            <ul class="qualifications-list">
              <li
                v-for="qualification in job.minimumQualifications"
                :key="qualification"
              >
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>
        <div class="expand-container">
          <RouterLink :to="jobPageLink" class="expand">Expand</RouterLink>
        </div>
      </div>
    </RouterLink>
  </li>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { Job } from "@/api/types";

export default defineComponent({
  name: "JobListing",
  props: {
    job: {
      type: Object as PropType<Job>,
      required: true,
    },
  },
  setup(props) {
    const jobPageLink = computed(() => `/jobs/results/${props.job.id}`);
    return { jobPageLink };
  },
});
</script>

<style lang="scss" scoped>
.list-container {
  margin-bottom: 1.75rem;
}

.link {
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border: 1px solid #f8f9fa;
  border-radius: 0.25rem;
  &:hover {
    box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.3);
  }
}

.job-title-container {
  padding-top: 1.25rem;
  padding-bottom: 0.5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  border-bottom: 1px solid #f8f9fa;
}

.job-title {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
}

.company-title {
  margin-right: 1.25rem;
}

.company-info {
  display: flex;
  vertical-align: middle;
}

.change-this {
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.qualifications-title {
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
}

.qualifications-list {
  padding-left: 2rem;
  list-style-type: disc;
}

.expand-container {
  margin-top: 0.5rem;
  text-align: center;
}

.expand {
  color: #1967d2;
}

.location-text {
  margin-right: 0.75rem;
}
</style>
