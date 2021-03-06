import { shallowMount } from "@vue/test-utils";
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";

import {
  useUniqueJobTypes,
  useUniqueOrganizations,
  useUniqueDegrees,
} from "@/store/composables";
import { DefineComponent } from "vue";
jest.mock("@/store/composables");

const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;
const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;
const useUniqueDegreesMock = useUniqueDegrees as jest.Mock;

describe("JobFiltersSidebar", () => {
  it("Allows user to filter jobs by job types", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    useUniqueOrganizationsMock.mockReturnValue(new Set(["AirBnB"]));
    useUniqueDegreesMock.mockReturnValue(["Ph.D", "Master's"]);
    const wrapper = shallowMount(JobFiltersSidebar);
    const jobTypesFilter = wrapper.findComponent<DefineComponent>(
      "[data-test='job-types-filter']"
    );
    const { header, uniqueValues, mutation } = jobTypesFilter.props();
    expect(header).toBe("Job Types");
    expect(uniqueValues).toEqual(new Set(["Full-time", "Part-time"]));
    expect(mutation).toBe("ADD_SELECTED_JOB_TYPES");
  });

  it("Allows user to filter jobs by organizations", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    useUniqueOrganizationsMock.mockReturnValue(new Set(["AirBnB"]));
    useUniqueDegreesMock.mockReturnValue(["Ph.D", "Master's"]);
    const wrapper = shallowMount(JobFiltersSidebar);
    const jobTypesFilter = wrapper.findComponent<DefineComponent>(
      '[data-test="organizations-filter"]'
    );
    const { header, uniqueValues, mutation } = jobTypesFilter.props();
    expect(header).toBe("Organizations");
    expect(uniqueValues).toEqual(new Set(["AirBnB"]));
    expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS");
  });

  it("Allows user to filter jobs by organizations", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    useUniqueOrganizationsMock.mockReturnValue(new Set(["AirBnB"]));
    useUniqueDegreesMock.mockReturnValue(["Ph.D", "Master's"]);
    const wrapper = shallowMount(JobFiltersSidebar);
    const degreesFilter = wrapper.findComponent<DefineComponent>(
      '[data-test="degrees-filter"]'
    );
    const { header, uniqueValues, mutation } = degreesFilter.props();
    expect(header).toBe("Degrees");
    expect(uniqueValues).toEqual(["Ph.D", "Master's"]);
    expect(mutation).toBe("ADD_SELECTED_DEGREES");
  });
});
