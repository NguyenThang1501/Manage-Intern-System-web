import axiosClient from "./axiosClient";

const studentApi = {
  getAll: () => {
    const url = "/student";
    return axiosClient.get(url);
  },

  get: (id) => {
    const url = `/student/${id}`;
    return axiosClient.get(url);
  },
  getPositions: () => {
    const url = `/student/internship-positions`;
    return axiosClient.get(url);
  },
};

export default studentApi;
