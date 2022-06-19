<template>
  <img :src="profilePicture" alt="Profile Picture" data-test="profile-image" />
</template>

<script lang="ts">
import profilePicture from "@/assets/profile-picture.png";
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    profilePicture() {
      return profilePicture;
    },
  },
});
</script>

<style>
img {
  margin: 0.5rem;
  margin-left: 35rem;
}
</style>
