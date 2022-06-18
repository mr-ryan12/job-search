import { mount } from "@vue/test-utils";
import { useStore } from "vuex";
import useConfirmRoute from "@/composables/useConfirmRoute";
jest.mock("@/composables/useConfirmRoute");

jest.mock("vuex");

import Subnav from "@/components/navigation/Subnav.vue";

describe("Subnav", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  describe("When user is on job page", () => {
    it("Should display job count", () => {
      useConfirmRoute.mockReturnValue(true);
      useStore.mockReturnValue({
        getters: {
          FILTER_JOBS: [{ id: 1 }, { id: 2 }],
        },
      });
      const wrapper = mount(Subnav, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });

    it("Should display the correct number of jobs", () => {
      const $store = {
        getters: {
          FILTER_JOBS: [{ id: 1 }, { id: 2 }],
        },
      };
      const wrapper = mount(Subnav, createConfig("JobResults", $store));
      expect(wrapper.text()).toMatch("2 job matches");
    });
  });

  describe("When user is not on job page", () => {
    it("Should not display job count", () => {
      useConfirmRoute.mockReturnValue(false);
      const wrapper = mount(Subnav, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
