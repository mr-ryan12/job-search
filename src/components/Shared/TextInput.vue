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
  data() {
    return {
      value: "",
    };
  },
  methods: {
    handleInput($event) {
      console.log($event);
      this.value = $event.target.value;
      this.$emit("handle-input");
    },
  },
};
</script>
