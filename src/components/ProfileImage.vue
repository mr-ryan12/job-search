<template>
  <img :src="profilePicture" alt="Profile Picture" data-test="profile-image" />
</template>

<script>
import profilePicture from "@/assets/profile-picture.png";

export default {
  computed: {
    profilePicture() {
      return profilePicture;
    },
  },
};
</script>

<style>
img {
  height: 80%;
  margin-top: 0.4rem;
  margin-left: 35rem;
  right: 200rem;
}
</style>
