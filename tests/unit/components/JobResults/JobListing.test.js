import { mount, RouterLinkStub } from "@vue/test-utils";

import JobResults from "@/components/JobResults/JobListing.vue";

describe("Job Results", () => {
  it("Should display a title", () => {

    const wrapper = mount(JobResults, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      },
      props: {
        job: {
          title: "Vue Developer",
        },
      },
    });
    expect(wrapper.text()).toMatch("Vue Developer");
  });
});
