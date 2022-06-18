import { mount } from "@vue/test-utils";

import Subnav from "@/components/navigation/Subnav.vue";

describe("Subnav", () => {
  // const $store = {
  //   getters: {
  //     FILTER_JOBS_BY_ORGANIZATIONS: Array(100).fill({}),
  //   },
  // };
  const createConfig = (routeName, $store = {}) => ({
    global: {
      mocks: {
        $route: {
          name: routeName,
        },
        $store,
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  describe("When user is on job page", () => {
    it("Should display job count", () => {
      const $store = {
        getters: {
          FILTER_JOBS_BY_ORGANIZATIONS: [{ id: 1 }, { id: 2 }],
        },
      };
      const wrapper = mount(Subnav, createConfig("JobResults", $store));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });

    it("Should display the correct number of jobs", () => {
      const $store = {
        getters: {
          FILTER_JOBS_BY_ORGANIZATIONS: [{ id: 1 }, { id: 2 }],
        },
      };
      const wrapper = mount(Subnav, createConfig("JobResults", $store));
      expect(wrapper.text()).toMatch("2 job matches");
    });
  });

  describe("When user is not on job page", () => {
    it("Should not display job count", () => {
      const wrapper = mount(Subnav, createConfig("Home"));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
