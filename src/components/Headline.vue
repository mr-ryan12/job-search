<template>
  <section class="headline-container">
    <h1 class="action-header" data-test="action-phrase">
      <span :class="actionClass">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="action-sub-header">Find your next job at Trey's Corp</h2>
  </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList.js";

export default {
  name: "HeadLine",
  data() {
    return {
      sample: "Hello! Thank you for stopping by!",
      action: "Build",
      interval: null,
    };
  },
  computed: {
    actionClass() {
      return { [this.action.toLowerCase()]: true };
    },
  },
  created() {
    this.changeAction();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeAction() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementInList(actions, this.action);
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}

.action-header {
  font-weight: 900;
  letter-spacing: -0.05em;
  font-size: 6rem;
  line-height: 1;
  margin-bottom: 3.5rem;
}

.action-sub-header {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 300;
}

.headline-container {
  margin-bottom: 4rem;
}
</style>
