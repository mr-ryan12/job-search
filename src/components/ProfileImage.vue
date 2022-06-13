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
  margin: 0.5rem;
  margin-left: 35rem;
}
</style>
