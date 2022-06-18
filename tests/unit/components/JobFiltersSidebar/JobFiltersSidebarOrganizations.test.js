import { mount } from "@vue/test-utils";

import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue";

describe("JobFiltersSidebarOrganizations", () => {
  const createConfig = ($store) => ({
    global: {
      mocks: {
        $store,
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  it("Should render organizations", async () => {
    const $store = {
      getters: {
        UNIQUE_ORGANIZATIONS: new Set(["Google", "Amazon"]),
      },
    };
    const wrapper = mount(JobFiltersSidebarOrganizations, createConfig($store));
    const clickableArea = wrapper.find("[data-test='clickable-area'");
    await clickableArea.trigger("click");
    const allOrganizationNodes = wrapper.findAll("[data-test='organization'");
    const organizations = allOrganizationNodes.map((organization) =>
      organization.text()
    );
    expect(organizations).toEqual(["Google", "Amazon"]);
  });

  it("Should indicate user has selected checkbox", async () => {
    const commit = jest.fn();
    const $store = {
      getters: {
        UNIQUE_ORGANIZATIONS: new Set(["Google", "Amazon"]),
      },
      commit,
    };
    const wrapper = mount(JobFiltersSidebarOrganizations, createConfig($store));
    const clickableArea = wrapper.find("[data-test='clickable-area'");
    await clickableArea.trigger("click");
    const googleInput = wrapper.find("[data-test='Google']");
    await googleInput.setChecked();
    expect(commit).toHaveBeenCalledWith("ADD_SELECTED_ORGANIZATIONS", [
      "Google",
    ]);
  });
});
