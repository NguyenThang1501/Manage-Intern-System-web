import axiosClient from "./axiosClient";

const studentApi = {
  getAll: () => {
    const url = "/student";
    return axiosClient.get(url);
  },

  get: (id, token) => {
    const url = `/teacher/student-mana/${id}`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },
  getPositions: () => {
    const url = `/student/internship-positions`;
    return axiosClient.get(url);
  },
};

export default studentApi;
