<template>
  <main class="job-listings">
    <ol>
      <li>
        <RouterLink to="/jobs/results/1" class="link">
          <div class="job-title-container">
            <h2 class="job-title">
              Technical Program Manager, Perception, Augmented Reality
            </h2>
            <div class="company-info">
              <div class="company-title">
                <span>Trey Trey</span>
              </div>
              <div>
                <span>Denver, CO, USA</span>
              </div>
            </div>
          </div>
        </RouterLink>
      </li>
    </ol>
  </main>
</template>

<script>
export default {
  name: "JobListings",
};
</script>

<style lang="scss" scoped>
.job-listings {
  flex: 1 1 auto;
  padding: 2rem;
  background-color: #f8f9fa;
}

li {
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
</style>
