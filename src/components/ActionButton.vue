<template>
  <button v-if="!isLoggedIn" class="login-button" @click="setLogin">
    Sign In
  </button>
  <img v-else :src="profilePicture" alt="Profile Picture" />
</template>

<script>
import profilePicture from "@/assets/profile-picture.png";

export default {
  props: {
    isLoggedIn: {
      type: Boolean,
    },
  },
  data() {
    return {
      profileImage: profilePicture,
    };
  },
  emits: ["login"],
  computed: {
    setLogin() {
      return this.$emit("login");
    },
  },
};
</script>

<style scoped>
button.login-button {
  background-color: blue;
  color: #fff;
  margin-left: 34rem;
  width: 5rem;
  height: 2rem;
  margin-top: 1rem;
  font-size: 0.8rem;
  border-radius: 5px;
}

button.login-button:hover {
  /* box-shadow: 3px 3px 3px 3px #4285f4; */
  background-color: #fff;
}

img {
  height: 80%;
  margin-top: 0.4rem;
  margin-left: 35rem;
}
</style>
