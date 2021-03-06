import { mount, RouterLinkStub } from "@vue/test-utils";
import { createJob } from "../../store/utils";
import { Job } from "@/api/types";

import JobResults from "@/components/JobResults/JobListing.vue";

describe("Job Results", () => {
  const createConfig = (job: Job) => ({
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
    props: {
      job: {
        ...job,
      },
    },
  });

  it("Should display a title", () => {
    const job = createJob({ title: "Vue Programmer" });
    const wrapper = mount(JobResults, createConfig(job));
    expect(wrapper.text()).toMatch("Vue Programmer");
  });

  it("Should display a organization", () => {
    const job = createJob({ organization: "Vue need some food" });
    const wrapper = mount(JobResults, createConfig(job));
    expect(wrapper.text()).toMatch("Vue need some food");
  });

  it("Should have locations", () => {
    const job = createJob({ locations: ["Dallas", "New York"] });
    const wrapper = mount(JobResults, createConfig(job));
    expect(wrapper.text()).toMatch("Dallas");
    expect(wrapper.text()).toMatch("New York");
  });

  it("Should have qualifications", () => {
    const job = createJob({
      minimumQualifications: [
        "Excellent attention to detail",
        "Willing to learn new tech",
        "Team player",
      ],
    });
    const wrapper = mount(JobResults, createConfig(job));
    expect(wrapper.text()).toMatch("Excellent attention to detail");
    expect(wrapper.text()).toMatch("Willing to learn new tech");
    expect(wrapper.text()).toMatch("Team player");
  });

  it("Should link to job page", () => {
    const job = createJob({ id: 15 });
    const wrapper = mount(JobResults, createConfig(job));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");
    expect(toProp).toBe("/jobs/results/15");
  });
});
