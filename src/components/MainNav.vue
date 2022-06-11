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
          <a>Teams</a>
          <a>Locations</a>
          <a>Benefits</a>
          <a>Jobs</a>
          <a>Students</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Ryan's Careers",
      url: "https://careers.google.com",
    };
  },
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  border-bottom: 2px solid grey;
  padding: 0.5rem;
  border-bottom: none;
}

.nav-logo {
  font-size: 1.25rem;
}

nav > a {
  margin: 10px;
}
</style>
