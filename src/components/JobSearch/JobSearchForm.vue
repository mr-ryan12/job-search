<template>
  <form>
    <font-awesome-icon :icon="['fas', 'search']" class="icon" />
    <div class="search-container">
      <div class="left-search-container">
        <label class="left-label">Role</label>
        <input
          v-model="role"
          type="text"
          placeholder="Software engineer"
          class="left-input"
        />
      </div>
      <span class="in-container">in</span>
      <div class="right-search-container">
        <label class="right-label">Where?</label>
        <input
          v-model="location"
          type="text"
          placeholder="Los Angeles"
          class="left-input"
        />
      </div>
    </div>
    <ActionButton text="Search" type="secondary" class="search-button" />
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
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

.search-container {
  display: flex;
  flex-wrap: nowrap;
  flex: 1 1 0%;
  height: 100%;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 300;
}

.left-search-container {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1 1 0%;
  height: 100%;
  padding-right: 0.75rem;
}

.left-label,
.right-label {
  position: absolute;
  left: 0px;
  top: -2.5rem;
}

.left-input {
  width: 100%;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 400;
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
}

.in-container {
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-left: 1px solid #80868b;
  border-right: 1px solid #80868b;
  background-color: #f8f9fa;
}

.right-search-container {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1 1 0%;
  height: 100%;
  padding-left: 0.75rem;
}

.search-button {
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  height: 100%;
}
</style>
