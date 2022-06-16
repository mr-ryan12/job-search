import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { createStore } from "vuex";

import MainNav from "@/components/navigation/MainNav.vue";

describe("MainNav", () => {
  const createConfig = ($store) => ({
    global: {
      mocks: {
        $store,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });

  it("Should display the company name", () => {
    const $store = {
      state: {
        isLoggedIn: false,
      }
    };
    const wrapper = shallowMount(MainNav, createConfig($store));
    expect(wrapper.text()).toMatch("Trey's Careers");
  });

  it("Should display menu items for navigation", () => {
    const store = createStore();
    const wrapper = shallowMount(MainNav, createConfig(store));
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuItemsText = navigationMenuItems.map((item) =>
      item.text()
    );

    expect(navigationMenuItemsText).toEqual([
      "Teams",
      "Locations",
      "Life at Ryan Corp",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("When user is logged out", () => {
    it("Prompts user to sign in", () => {
      const store = createStore();
      const wrapper = shallowMount(MainNav, createConfig(store));
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("When user is logged in", () => {
    it("Should display a profile image", () => {
      const store = createStore({
        state() {
          return {
            isLoggedIn: true,
          };
        },
      });

      const wrapper = shallowMount(MainNav, createConfig(store));
      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("Should display subnavigation menu with additional information", () => {
      const store = createStore({
        state() {
          return {
            isLoggedIn: true,
          };
        },
      });
      const wrapper = shallowMount(MainNav, createConfig(store));
      const subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });

  describe("When user is logged out", () => {
    it("Issues call to Vuex to login user", async () => {
      const store = createStore();
      const commit = jest.fn();
      store.commit = commit;
      const wrapper = shallowMount(MainNav, createConfig(store));
      const loginButton = wrapper.find("[data-test='login-button']");

      await loginButton.trigger("click");

      expect(commit).toHaveBeenCalledWith("LOGIN_USER");
    });
  });
});
