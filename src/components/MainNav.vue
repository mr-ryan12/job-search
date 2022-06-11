<template>
  <!-- <nav>
    <h2 class="nav-logo">
      <span class="text-blue-500">G</span>
      <span class="text-red-500">o</span>
      <span class="text-yellow-500">o</span>
      <span class="text-blue-500">g</span>
      <span class="text-green-500">l</span>
      <span class="text-red-500">e</span>
      Careers
    </h2>
    <p class="sub-nav">Teams</p>
    <p class="sub-nav">Locations</p>
    <p class="sub-nav">Students</p>
    <p class="sub-nav">Jobs</p>
  </nav> -->
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a href="/" class="flex items-center h-full text-xl">Bobo Careers</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  border-bottom: 2px solid grey;
  padding: 0.5rem;
}

.nav-logo {
  font-size: 1.25rem;
}

nav > h2,
nav > p {
  margin: 10px;
}
</style>
