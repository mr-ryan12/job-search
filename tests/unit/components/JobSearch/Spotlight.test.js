import { flushPromises, mount } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import Spotlight from "@/components/JobSearch/Spotlight.vue";

describe("Spotlight", () => {
  it("Should have an image", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          img: "Some Image",
          title: "Cloud Engineering",
          description:
            "Build fun stuff in the cloud. It's a lot of fun, we promise!",
        },
      ],
    });
    const wrapper = mount(Spotlight, {
      slots: {
        default: `
          <template #default="slotProps">
            <h1>{{ slotProps.spotlight.img }}</h1>
          </template>
        `,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("Some Image");
  });
});
