import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";
import App from "@/App.vue";

describe("MainNav", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MainNav);
  });

  it("Should display the company name", () => {
    expect(wrapper.text()).toMatch("Ryan's Careers");
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
      const profileImage = wrapper.find("[data-test='profile-image']");

      expect(loginButton.exists()).toBe(true);
      expect(profileImage.exists()).toBe(false);
    });
  });

  describe("When user is logged in", () => {
    it("Should display a profile image", () => {
      const wrapper = mount(App, {
        data() {
          return {
            isLoggedIn: true,
          };
        },
      });
      const loginButton = wrapper.find("[data-test='sign-in-button']");
      const profileImage = wrapper.find("[data-test='profile-image']");

      expect(loginButton.exists()).toBe(false);
      expect(profileImage.exists()).toBe(true);
    });
  });
});
