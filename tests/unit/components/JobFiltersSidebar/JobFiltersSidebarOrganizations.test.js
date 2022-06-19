import { mount } from "@vue/test-utils";
import { useStore } from "vuex";
jest.mock("vuex");

import { useRouter } from "vue-router";
jest.mock("vue-router");

import { useUniqueOrganizations } from "@/store/composables";
jest.mock("@/store/composables");
import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue";

describe("JobFiltersSidebarOrganizations", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  it("Should render organizations", async () => {
    useUniqueOrganizations.mockReturnValue(new Set(["Google", "Amazon"]));
    const wrapper = mount(JobFiltersSidebarOrganizations, createConfig());
    const clickableArea = wrapper.find("[data-test='clickable-area'");
    await clickableArea.trigger("click");
    const allOrganizationNodes = wrapper.findAll("[data-test='organization'");
    const organizations = allOrganizationNodes.map((organization) =>
      organization.text()
    );
    expect(organizations).toEqual(["Google", "Amazon"]);
  });

  describe("When user clicks checkbox", () => {
    it("Should indicate user has selected organization checkbox", async () => {
      useUniqueOrganizations.mockReturnValue(new Set(["Google", "Amazon"]));
      const commit = jest.fn();
      useStore.mockReturnValue({ commit });
      useRouter.mockReturnValue({ push: jest.fn() });

      const wrapper = mount(JobFiltersSidebarOrganizations, createConfig());
      const clickableArea = wrapper.find("[data-test='clickable-area'");
      await clickableArea.trigger("click");
      const googleInput = wrapper.find("[data-test='Google']");
      await googleInput.setChecked();
      expect(commit).toHaveBeenCalledWith("ADD_SELECTED_ORGANIZATIONS", [
        "Google",
      ]);
    });

    it("Navigates user to page 1 to see a fresh batch of filtered jobs", async () => {
      useUniqueOrganizations.mockReturnValue(new Set(["Google", "Amazon"]));
      useStore.mockReturnValue({ commit: jest.fn() });
      const push = jest.fn();
      useRouter.mockReturnValue({ push });
      const wrapper = mount(JobFiltersSidebarOrganizations, createConfig());
      const clickableArea = wrapper.find("[data-test='clickable-area'");
      await clickableArea.trigger("click");
      const googleInput = wrapper.find("[data-test='Google']");
      await googleInput.setChecked();
      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
