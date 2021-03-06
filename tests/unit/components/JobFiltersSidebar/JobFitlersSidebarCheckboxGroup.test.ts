import { mount } from "@vue/test-utils";
import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

import { useRouter } from "vue-router";
jest.mock("vue-router");
const useRouterMock = useRouter as jest.Mock;

import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

describe("JobFiltersSidebarCheckboxGroup", () => {
  const createConfig = (props = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    props: {
      header: "Some Header",
      uniqueValues: new Set(["Value A", "Value B"]),
      mutation: "Some mutation",
      ...props,
    },
  });

  it("Should render job types", async () => {
    const props = {
      uniqueValues: new Set(["Value A", "Value B"]),
    };
    const wrapper = mount(JobFiltersSidebarCheckboxGroup, createConfig(props));
    const clickableArea = wrapper.find("[data-test='clickable-area'");
    await clickableArea.trigger("click");
    const allValueNodes = wrapper.findAll("[data-test='value'");
    const valueTypes = allValueNodes.map((node) => node.text());
    expect(valueTypes).toEqual(["Value A", "Value B"]);
  });

  describe("When user selects a checkbox", () => {
    it("Should indicate user has selected checkbox", async () => {
      const commit = jest.fn();
      useStoreMock.mockReturnValue({ commit });
      useRouterMock.mockReturnValue({
        push: jest.fn(),
      });
      const props = {
        mutation: "SOME_MUTATION",
        uniqueValues: new Set(["Full-time"]),
      };
      const wrapper = mount(
        JobFiltersSidebarCheckboxGroup,
        createConfig(props)
      );
      const clickableArea = wrapper.find("[data-test='clickable-area'");
      await clickableArea.trigger("click");
      const fullTimeInput = wrapper.find("[data-test='Full-time']");
      await fullTimeInput.setValue(true);
      expect(commit).toHaveBeenCalledWith("SOME_MUTATION", ["Full-time"]);
    });

    it("Should redirect user back to page 1 to see a fresh batch of filtered jobs", async () => {
      useStoreMock.mockReturnValue({ commit: jest.fn() });
      const push = jest.fn();
      useRouterMock.mockReturnValue({ push });
      const props = {
        uniqueValues: new Set(["Full-time"]),
      };
      const wrapper = mount(
        JobFiltersSidebarCheckboxGroup,
        createConfig(props)
      );
      const clickableArea = wrapper.find("[data-test='clickable-area'");
      await clickableArea.trigger("click");
      const fullTimeInput = wrapper.find("[data-test='Full-time']");
      await fullTimeInput.setValue(true);
      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
