<template>
  <nav>
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
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  border: 2px solid black;
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
