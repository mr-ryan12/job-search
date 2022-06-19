import { mount } from "@vue/test-utils";
import { useRouter } from "vue-router";
jest.mock("vue-router");
const useRouterMock = useRouter as jest.Mock;

import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

describe("Job Search Form", () => {
  describe("When the user submits the form", () => {
    it("Should have correct query parameters when user inputs text", async () => {
      const push = jest.fn();
      useRouterMock.mockReturnValue({
        push,
      });

      const wrapper = mount(JobSearchForm, {
        attachTo: document.body,
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const roleInput = wrapper.find("[data-test='role-input']");
      await roleInput.setValue("Vue Developer");

      const locationInput = wrapper.find("[data-test='location-input']");
      await locationInput.setValue("Denver");

      const submitButton = wrapper.find("[data-test='submit-button']");
      await submitButton.trigger("click");

      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: {
          role: "Vue Developer",
          location: "Denver",
        },
      });
    });
  });
});
