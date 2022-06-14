import { mount } from "@vue/test-utils";

import TextInput from "@/components/Shared/TextInput.vue";

describe("Text Input", () => {
  it("Should input a character", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    input.setValue("N");
    input.setValue("NY");
    input.setValue("NYC");
    const messages = wrapper.emitted()["update:modelValue"];
    expect(messages).toEqual([["N"], ["NY"], ["NYC"]]);
  });
});
