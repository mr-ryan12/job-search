import { mount } from "@vue/test-utils";

import Subnav from "@/components/navigation/Subnav.vue";

describe("Subnav", () => {
  describe("When user is on job page", () => {
    it("Should display job count", () => {
      const $route = {
        name: "JobResults",
      };

      const wrapper = mount(Subnav, {
        global: {
          mocks: {
            $route,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("When user is not on job page", () => {
    it("Should not display job count", () => {
      const $route = {
        name: "Home",
      };

      const wrapper = mount(Subnav, {
        global: {
          mocks: {
            $route,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
