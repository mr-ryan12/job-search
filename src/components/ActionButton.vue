<template>
  <button
    data-test="sign-in-button"
    :class="isHovering ? 'hover' : null"
    @mouseenter="hoverTrue"
    @mouseleave="hoverFalse"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ["text"],
  data() {
    return {
      isHovering: false,
    };
  },
  methods: {
    hoverTrue() {
      this.isHovering = true;
    },
    hoverFalse() {
      this.isHovering = false;
    },
  },
};
</script>

<style scoped>
button {
  background-color: blue;
  color: #fff;
  margin-left: 34rem;
  width: 5rem;
  height: 2rem;
  margin-top: 1rem;
  font-size: 0.8rem;
  border-radius: 5px;
}

.hover {
  box-shadow: 0 0 3px 3px rgb(137, 137, 238);
}
</style>
