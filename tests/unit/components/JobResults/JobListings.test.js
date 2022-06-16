import { flushPromises, shallowMount, RouterLinkStub } from "@vue/test-utils";

import JobListings from "@/components/JobResults/JobListings.vue";

describe("JobListings", () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });

  const createStore = (storeParams = {}) => ({
    state: {
      jobs: Array(15).fill({}),
    },
    dispatch: jest.fn(),
    ...storeParams,
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

  it("Should create job listings for a maximum of 10 jobs", async () => {
    const queryParams = { page: "1" };
    const $route = createRoute(queryParams);
    const $store = createStore();
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
      const $store = createStore();
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
