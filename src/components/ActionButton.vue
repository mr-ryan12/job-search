<template>
  <button :class="type">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
      required: true,
    },
    type: {
      type: String,
      default: "primary",
      required: false,
      validator(value) {
        // must return a Boolean
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  font-size: 0.8rem;
  border-radius: 5px;
  height: 2rem;
  width: 5rem;
}

.primary {
  background-color: blue;
  color: #fff;
  margin-left: 34rem;
  // width: 5rem;
  // height: 2rem;
  margin-top: 1rem;
  // border-radius: 5px;
  &:hover {
    box-shadow: 0 0 3px 3px rgb(137, 137, 238);
  }
}

.secondary {
  color: #4285f4;
  background-color: #fff;
  &:hover {
    background-color: #4285f4;
    color: #fff;
  }
}
</style>
