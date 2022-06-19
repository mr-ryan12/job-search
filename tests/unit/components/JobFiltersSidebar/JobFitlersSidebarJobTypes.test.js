import { mount } from "@vue/test-utils";
import { useStore } from "vuex";
jest.mock("vuex");

import { useRouter } from "vue-router";
jest.mock("vue-router");

import { useUniqueJobTypes } from "@/store/composables";
jest.mock("@/store/composables");

import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue";

describe("JobFiltersSidebarJobTypes", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  it("Should render job types", async () => {
    useUniqueJobTypes.mockReturnValue(new Set(["Full-time", "Part-time"]));
    const wrapper = mount(JobFiltersSidebarJobTypes, createConfig());
    const clickableArea = wrapper.find("[data-test='clickable-area'");
    await clickableArea.trigger("click");
    const allJobTypeNodes = wrapper.findAll("[data-test='job-type'");
    const jobTypes = allJobTypeNodes.map((jobType) => jobType.text());
    expect(jobTypes).toEqual(["Full-time", "Part-time"]);
  });

  describe("When user selects a checkbox", () => {
    it("Should indicate user has selected checkbox", async () => {
      useUniqueJobTypes.mockReturnValue(new Set(["Full-time", "Part-time"]));
      const commit = jest.fn();
      useStore.mockReturnValue({ commit });
      useRouter.mockReturnValue({
        push: jest.fn(),
      });
      const wrapper = mount(JobFiltersSidebarJobTypes, createConfig());
      const clickableArea = wrapper.find("[data-test='clickable-area'");
      await clickableArea.trigger("click");
      const fullTimeInput = wrapper.find("[data-test='Full-time']");
      await fullTimeInput.setChecked();
      expect(commit).toHaveBeenCalledWith("ADD_SELECTED_JOB_TYPES", [
        "Full-time",
      ]);
    });

    it("Should redirect user back to page 1 to see a fresh batch of filtered jobs", async () => {
      useUniqueJobTypes.mockReturnValue(new Set(["Full-time", "Part-time"]));
      useStore.mockReturnValue({ commit: jest.fn() });
      const push = jest.fn();
      useRouter.mockReturnValue({ push });
      const $router = { push };
      const wrapper = mount(JobFiltersSidebarJobTypes, createConfig());
      const clickableArea = wrapper.find("[data-test='clickable-area'");
      await clickableArea.trigger("click");
      const fullTimeInput = wrapper.find("[data-test='Full-time']");
      await fullTimeInput.setChecked();
      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
