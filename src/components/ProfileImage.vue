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
  margin-left: 35rem;
}
</style>
