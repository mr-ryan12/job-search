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
            <li>
              <a href="">Teams</a>
            </li>
            <li>
              <a href="">Locations</a>
            </li>
            <li>
              <a href="">Life at Ryan Corp</a>
            </li>
            <li>
              <a href="">How we hire</a>
            </li>
            <li>
              <a href="">Students</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
          </ul>
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
