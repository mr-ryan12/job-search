<template>
  <button data-test="sign-in-button" :class="buttonStyle">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    buttonStyle: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isHovering: false,
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: blue;
  color: #fff;
  margin-left: 34rem;
  width: 5rem;
  height: 2rem;
  margin-top: 1rem;
  font-size: 0.8rem;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 0 3px 3px rgb(137, 137, 238);
  }
}

// .hover {
//   box-shadow: 0 0 3px 3px rgb(137, 137, 238);
// }
</style>
