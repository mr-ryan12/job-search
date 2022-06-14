import { shallowMount } from "@vue/test-utils";

import MainNav from "@/components/navigation/MainNav.vue";

describe("MainNav", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(MainNav);
  });

  it("Should display the company name", () => {
    expect(wrapper.text()).toMatch("Trey's Careers");
  });

  it("Should display menu items for navigation", () => {
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
      const loginButton = wrapper.find("[data-test='sign-in-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("When user is logged in", () => {
    it("Should display a profile image", async () => {
      let loginButton = wrapper.find("[data-test='sign-in-button']");
      let profileImage = wrapper.find("[data-test='profile-image']");

      expect(loginButton.exists()).toBe(true);
      expect(profileImage.exists()).toBe(false);

      await loginButton.trigger("click");

      loginButton = wrapper.find("[data-test='sign-in-button']");
      profileImage = wrapper.find("[data-test='profile-image']");

      expect(loginButton.exists()).toBe(false);
      expect(profileImage.exists()).toBe(true);
    });

    it("Should display subnavigation menu with additional information", async () => {
      const wrapper = shallowMount(MainNav);
      let subnav = wrapper.find("[data-test='subnav']");

      expect(subnav.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='sign-in-button']");
      await loginButton.trigger("click");

      subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });
});
