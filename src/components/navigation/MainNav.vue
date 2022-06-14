<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <RouterLink
          :to="{ name: 'Home' }"
          :href="url"
          class="flex items-center h-full text-xl home-nav-link"
          >Trey's Careers</RouterLink
        >
        <nav>
          <ul>
            <li
              v-for="item in menuItems"
              :key="item"
              data-test="main-nav-list-item"
            >
              <a href="">{{ item }}</a>
            </li>
          </ul>
        </nav>
        <ActionButton
          v-if="!isLoggedIn"
          text="Sign In"
          type="primary"
          :is-logged-in="isLoggedIn"
          data-test="sign-in-button"
          @click="login"
        />
        <ProfileImage v-else data-test="profile-image" />
      </div>
      <Subnav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/navigation/ProfileImage.vue";
import Subnav from "@/components//navigation/Subnav";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    Subnav,
  },
  data() {
    return {
      isLoggedIn: false,
      menuItems: [
        "Teams",
        "Locations",
        "Life at Ryan Corp",
        "How we hire",
        "Students",
        "Jobs",
      ],
    };
  },
  computed: {
    headerHeightClass() {
      // return {
      //   "h-16": !this.isLoggedIn,
      //   "h-32": this.isLoggedIn,
      // };
      return this.isLoggedIn ? "height-128" : "height-64";
    },
  },
  methods: {
    login() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  align-items: center;
  border-bottom: 2px solid grey;
  padding: 0.5rem;
  border-bottom: none;
  margin-left: 1rem;
  height: 100%;
  width: 100%;
}

.nav-logo {
  font-size: 1.25rem;
}

li > a {
  margin: 1rem;
}

.height-64 {
  height: 64px;
}

.height-128 {
  height: 128px;
}

.home-nav-link {
  &:hover {
    cursor: pointer;
  }
}
</style>
