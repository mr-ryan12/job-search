<template>
  <section>
    <h1>{{ action }} for everyone</h1>
    <h2>Find your next job at Trey's Corp</h2>
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
