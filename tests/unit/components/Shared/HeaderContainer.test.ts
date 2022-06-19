import { mount } from "@vue/test-utils";

import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

describe("HeaderContainer", () => {
  it("Should provide title content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        title: "<h2>Test Title</h2>",
      },
    });
    expect(wrapper.text()).toMatch("Test Title");
  });

  it("Should provide a subtitle", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        title: "<h2>Subtitle test</h2>",
      },
    });
    expect(wrapper.text()).toMatch("Subtitle test");
  });
});
