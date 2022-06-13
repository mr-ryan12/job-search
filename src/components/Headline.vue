<template>
  <section>
    <h1 class="action-header">
      <span :class="actionClass">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="action-sub-header">Find your next job at Trey's Corp</h2>
  </section>
</template>

<script>
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
      return this.action.toLowerCase();
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
        const actionIndex = actions.indexOf(this.action);
        const newIndex = (actionIndex + 1) % 4;

        this.action = actions[newIndex];
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
</style>
