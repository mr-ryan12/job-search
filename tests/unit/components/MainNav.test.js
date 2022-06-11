import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  // I used .toContain initially and it seems to work similarly
  // Maybe lookup the difference between toContain and toMatch
  it("Should display the company name", () => {
    const wrapper = mount(MainNav);

    expect(wrapper.text()).toMatch("Bobo Careers");
  });
});
