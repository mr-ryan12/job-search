<template>
  <button v-if="!isLoggedIn" data-test="sign-in-button" @click="setLogin">
    Sign In
  </button>
  <img
    v-else
    :src="toggleProfilePicture"
    alt="Profile Picture"
    data-test="profile-image"
  />
</template>

<script>
import profilePicture from "@/assets/profile-picture.png";

export default {
  props: {
    isLoggedIn: {
      type: Boolean,
    },
  },
  emits: ["login"],
  computed: {
    setLogin() {
      return this.$emit("login");
    },
    toggleProfilePicture() {
      return profilePicture;
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

img {
  height: 80%;
  margin-top: 0.4rem;
  margin-left: 35rem;
  right: 200rem;
}
</style>
