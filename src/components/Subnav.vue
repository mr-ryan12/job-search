<template>
  <div class="main-container">
    <div class="sub-container">this is a subnav</div>
  </div>
</template>

<script>
export default {
  name: "Subnav",
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 4rem;
  background-color: #fff;
  border-bottom: 1px solid #dadcd0;
}

.sub-container {
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>
