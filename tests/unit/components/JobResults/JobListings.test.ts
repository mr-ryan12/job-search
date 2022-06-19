import { ref } from "vue";
import { flushPromises, shallowMount, RouterLinkStub } from "@vue/test-utils";

import { useFilteredJobs, useFetchJobsDispatch } from "@/store/composables";
jest.mock("@/store/composables");

import useCurrentPage from "@/composables/useCurrentPage";
jest.mock("@/composables/useCurrentPage");

import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";
jest.mock("@/composables/usePreviousAndNextPages");

import JobListings from "@/components/JobResults/JobListings.vue";

const useFilteredJobsMock = useFilteredJobs as jest.Mock;
const useCurrentPageMock = useCurrentPage as jest.Mock;
const usePreviousAndNextPagesMock = usePreviousAndNextPages as jest.Mock;

describe("JobListings", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });

  describe("Mounted", () => {
    it("Should invoke the dispatch method with the correct arguments", () => {
      useFilteredJobsMock.mockReturnValue({ value: [] });
      useCurrentPageMock.mockReturnValue({ value: 2 });
      usePreviousAndNextPagesMock.mockReturnValue({
        previousPage: 1,
        nextPage: 3,
      });
      shallowMount(JobListings, createConfig());
      expect(useFetchJobsDispatch).toHaveBeenCalled();
    });
  });

  it("Should create job listings for a maximum of 10 jobs", async () => {
    useFilteredJobsMock.mockReturnValue({ value: Array(15).fill({}) });
    useCurrentPageMock.mockReturnValue({ value: 1 });
    usePreviousAndNextPagesMock.mockReturnValue({
      previousPage: undefined,
      nextPage: 2,
    });
    const wrapper = shallowMount(JobListings, createConfig());
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });

  it("Should display page number", () => {
    useFilteredJobsMock.mockReturnValue({ value: [] });
    useCurrentPageMock.mockReturnValue(ref(5));
    usePreviousAndNextPagesMock.mockReturnValue({
      previousPage: 4,
      nextPage: 6,
    });

    const wrapper = shallowMount(JobListings, createConfig());
    expect(wrapper.text()).toMatch("Page 5");
  });

  describe("When user is on first page of job results", () => {
    it("Does not show link to previous page", () => {
      useFilteredJobsMock.mockReturnValue({ value: [] });
      useCurrentPageMock.mockReturnValue(ref(1));
      usePreviousAndNextPagesMock.mockReturnValue({
        previousPage: undefined,
        nextPage: 2,
      });
      const wrapper = shallowMount(JobListings, createConfig());
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(false);
    });

    it("Shows link to next page", async () => {
      useFilteredJobsMock.mockReturnValue({ value: [] });
      useCurrentPageMock.mockReturnValue(ref(1));
      usePreviousAndNextPagesMock.mockReturnValue({
        previousPage: undefined,
        nextPage: 2,
      });
      const wrapper = shallowMount(JobListings, createConfig());
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(true);
    });
  });

  describe("When user is on last page of job results", () => {
    it("Does not show link to next page", async () => {
      useFilteredJobsMock.mockReturnValue({ value: [] });
      useCurrentPageMock.mockReturnValue(ref(1));
      usePreviousAndNextPagesMock.mockReturnValue({
        previousPage: 9,
        nextPage: undefined,
      });
      const wrapper = shallowMount(JobListings, createConfig());
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(false);
    });

    it("Shows link to previous page", async () => {
      useFilteredJobsMock.mockReturnValue({ value: [] });
      useCurrentPageMock.mockReturnValue(ref(2));
      usePreviousAndNextPagesMock.mockReturnValue({
        previousPage: 1,
        nextPage: 3,
      });
      const wrapper = shallowMount(JobListings, createConfig());
      await flushPromises();
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(true);
    });
  });
});
