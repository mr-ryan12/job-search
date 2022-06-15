import { mount, RouterLinkStub } from "@vue/test-utils";

import JobResults from "@/components/JobResults/JobListing.vue";

describe("Job Results", () => {
  const createConfig = (title) => ({
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
    props: {
      job: {
        title: title,
      },
    },
  });
  it("Should display a title", () => {
    const wrapper = mount(JobResults, createConfig("Vue Developer"));
    expect(wrapper.text()).toMatch("Vue Developer");
  });

  it("Should display a organization", () => {
    const wrapper = mount(JobResults, createConfig("Air BnB"));
    expect(wrapper.text()).toMatch("Air BnB");
  });
});
