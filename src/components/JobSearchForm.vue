<template>
  <form>
    <font-awesome-icon :icon="['fas', 'search']" class="icon" />
  </form>
</template>

<script>
export default {
  name: "JobSearchForm",
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  margin-top: 3.5rem;
  border: 1px solid #80868b;
  border-radius: 1.5rem;
}

.icon {
  margin-left: 1rem;
  margin-right: 0.74rem;
}
</style>
