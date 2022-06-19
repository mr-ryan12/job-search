import { FETCH_JOBS, RECEIVE_JOBS } from "./constants";
import getJobs from "@/api/getJobs";

import { Job } from "@/api/types";
import { Commit } from "vuex";

interface Context {
  // commit: (RECEIVE_JOBS: string, jobListings: Job[]) => void;
  commit: Commit;
}

const actions = {
  [FETCH_JOBS]: async (context: Context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings);
  },
};

export default actions;
