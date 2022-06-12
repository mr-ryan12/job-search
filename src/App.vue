<template>
  <MainNav :is-logged-in="isLoggedIn" @login="toggleLogin" />
</template>

<script>
import MainNav from "@/components/MainNav.vue";

export default {
  name: "App",
  components: {
    MainNav,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    toggleLogin() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
};
</script>
