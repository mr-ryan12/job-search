import { flushPromises, shallowMount, RouterLinkStub } from "@vue/test-utils";

import JobListings from "@/components/JobResults/JobListings.vue";

describe("JobListings", () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });

  const createStore = (config = {}) => ({
    getters: {
      FILTER_JOBS: [],
    },
    dispatch: jest.fn(),
    ...config,
  });

  const createConfig = ($route, $store) => ({
    global: {
      mocks: {
        $route,
        $store,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });

  describe("Mounted", () => {
    it("Should invoke the dispatch method with the correct arguments", () => {
      const $route = createRoute();
      const dispatch = jest.fn();
      const $store = createStore({ dispatch });
      shallowMount(JobListings, createConfig($route, $store));
      expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS");
    });
  });

  it("Should create job listings for a maximum of 10 jobs", async () => {
    const queryParams = { page: "1" };
    const $route = createRoute(queryParams);
    const numberOfJohsInStore = 15;
    const $store = createStore({
      getters: {
        FILTER_JOBS: Array(numberOfJohsInStore).fill({}),
      },
    });
    const wrapper = shallowMount(JobListings, createConfig($route, $store));
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });

  describe("When query params exclude page number", () => {
    it("Should display page #1", () => {
      const queryParams = { page: undefined };
      const $route = createRoute(queryParams);
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      expect(wrapper.text()).toMatch("Page 1");
    });
  });

  describe("When query params include page number", () => {
    it("Should display page number", () => {
      const queryParams = { page: 3 };
      const $route = createRoute(queryParams);
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      expect(wrapper.text()).toMatch("Page 3");
    });
  });

  describe("When user is on first page of job results", () => {
    it("Does not show link to previous page", () => {
      const queryParams = { page: 1 };
      const $route = createRoute(queryParams);
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(false);
    });

    it("Shows link to next page", async () => {
      const queryParams = { page: 1 };
      const $route = createRoute(queryParams);
      const $store = createStore({
        getters: {
          FILTER_JOBS: Array(15).fill({}),
        },
      });
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(true);
    });
  });

  describe("When user is on last page of job results", () => {
    it("Does not show link to next page", async () => {
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(false);
    });

    it("Shows link to previous page", async () => {
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(true);
    });
  });
});
