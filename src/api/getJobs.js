import axios from "axios";

const getJobs = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  await axios.get(`${baseUrl}/jobs`);
};

export default getJobs;
