import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

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
});
