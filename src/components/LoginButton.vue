<template>
  <button v-if="!isLoggedIn" @click="toggleLogin">Sign In</button>
  <img v-else :src="profilePicture" alt="Profile Picture" />
</template>

<script setup>
import { ref } from "vue";
import profilePicture from "@/assets/profile-picture.png";

const isLoggedIn = ref(false);

const toggleLogin = () => {
  isLoggedIn.value = !isLoggedIn.value;
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
