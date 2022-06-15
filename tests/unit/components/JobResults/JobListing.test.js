import { mount, RouterLinkStub } from "@vue/test-utils";

import JobResults from "@/components/JobResults/JobListing.vue";

describe("Job Results", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "Air BnB",
    locations: ["Minneapolis"],
    minimumQualifications: ["Succeed"]
    ...jobProps,
  });
  const createConfig = (jobProps) => ({
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
    props: {
      job: {
        ...jobProps,
      },
    },
  });
  it("Should display a title", () => {
    const jobProps = createJobProps({ title: "Vue Programmer" });
    const wrapper = mount(JobResults, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Vue Programmer");
  });

  it("Should display a organization", () => {
    const jobProps = createJobProps({ organization: "Vue need some food" });
    const wrapper = mount(JobResults, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Vue need some food");
  });

  it("Should have locations", () => {
    const jobProps = createJobProps({ locations: ["Dallas", "New York"] });
    const wrapper = mount(JobResults, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Dallas");
    expect(wrapper.text()).toMatch("New York");
  });

  it("Should have qualifications", () => {
    const jobProps = createJobProps({
      minimumQualifications: [
        "Excellent attention to detail",
        "Willing to learn new tech",
        "Team player",
      ],
    });
    const wrapper = mount(JobResults, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Excellent attention to detail");
    expect(wrapper.text()).toMatch("Willing to learn new tech");
    expect(wrapper.text()).toMatch("Team player");
  });
});
