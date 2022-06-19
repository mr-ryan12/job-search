<template>
  <button :class="type">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { toRefs, computed } from "vue";

export default defineComponent({
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
      validator: (value: string) => {
        // must return a Boolean
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  setup(props) {
    const { type } = toRefs(props);
    const buttonClass = computed(() => {
      return {
        [type.value]: true,
      };
    });

    return { buttonClass };
  },
});
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
