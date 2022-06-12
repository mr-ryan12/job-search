import { mount } from "@vue/test-utils";

import ActionButton from "@/components/ActionButton.vue";

describe("Action Button", () => {
  it("Should render text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Something something dark side",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("Something something dark side");
  });

  it("Should have a primary class", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Something something dark side",
        type: "primary",
      },
    });
    const actionButton = wrapper.find("button");
    expect(actionButton.classes("primary")).toBe(true);
  });
});
