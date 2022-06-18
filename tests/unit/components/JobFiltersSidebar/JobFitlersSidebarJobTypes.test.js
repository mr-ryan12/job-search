import { mount } from "@vue/test-utils";

import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue";

describe("JobFiltersSidebarJobTypes", () => {
  const createConfig = ($store, $router) => ({
    global: {
      mocks: {
        $store,
        $router,
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  it("Should render job types", async () => {
    const $router = {
      push: jest.fn(),
    };
    const $store = {
      getters: {
        UNIQUE_JOB_TYPES: new Set(["Full-time", "Part-time"]),
      },
    };
    const wrapper = mount(
      JobFiltersSidebarJobTypes,
      createConfig($store, $router)
    );
    const clickableArea = wrapper.find("[data-test='clickable-area'");
    await clickableArea.trigger("click");
    const allJobTypeNodes = wrapper.findAll("[data-test='job-type'");
    const jobTypes = allJobTypeNodes.map((jobType) => jobType.text());
    expect(jobTypes).toEqual(["Full-time", "Part-time"]);
  });

  describe("When user selects a checkbox", () => {
    it("Should indicate user has selected checkbox", async () => {
      const commit = jest.fn();
      const $router = {
        push: jest.fn(),
      };
      const $store = {
        getters: {
          UNIQUE_JOB_TYPES: new Set(["Full-time", "Part-time"]),
        },
        commit,
      };
      const wrapper = mount(
        JobFiltersSidebarJobTypes,
        createConfig($store, $router)
      );
      const clickableArea = wrapper.find("[data-test='clickable-area'");
      await clickableArea.trigger("click");
      const fullTimeInput = wrapper.find("[data-test='Full-time']");
      await fullTimeInput.setChecked();
      expect(commit).toHaveBeenCalledWith("ADD_SELECTED_JOB_TYPES", [
        "Full-time",
      ]);
    });

    it("Should redirect user back to page 1 to see a fresh batch of filtered jobs", async () => {
      const $store = {
        getters: {
          UNIQUE_JOB_TYPES: new Set(["Full-time", "Part-time"]),
        },
        commit: jest.fn(),
      };
      const push = jest.fn();
      const $router = { push };
      const wrapper = mount(
        JobFiltersSidebarJobTypes,
        createConfig($store, $router)
      );
      const clickableArea = wrapper.find("[data-test='clickable-area'");
      await clickableArea.trigger("click");
      const fullTimeInput = wrapper.find("[data-test='Full-time']");
      await fullTimeInput.setChecked();
      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
