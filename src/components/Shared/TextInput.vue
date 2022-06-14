<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="value"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      default: "",
      required: false,
    },
  },
  emits: ["handle-input"],
  data() {
    return {
      value: "",
    };
  },
  methods: {
    handleInput($event) {
      this.value = $event.target.value;
      this.$emit("handle-input", this.value);
    },
  },
};
</script>
