<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a :href="url" class="flex items-center h-full text-xl">{{
          company
        }}</a>
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
          :is-logged-in="isLoggedIn"
          @click="$emit('login')"
        />
        <ProfileImage v-else />
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "./ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
  },
  props: {
    isLoggedIn: {
      type: Boolean,
    },
  },
  emits: ["login"],
  data() {
    return {
      company: "Ryan's Careers",
      url: "https://careers.google.com",
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
};
</script>

<style scoped>
ul {
  display: flex;
  align-items: center;
  border-bottom: 2px solid grey;
  padding: 0.5rem;
  border-bottom: none;
  margin-left: 1rem;
  height: 100%;
}

.nav-logo {
  font-size: 1.25rem;
}

li > a {
  margin: 1rem;
}
</style>
