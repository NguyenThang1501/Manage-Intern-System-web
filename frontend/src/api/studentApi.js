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
  getPositions: (token) => {
    const url = `/student/internship-register/collab/positions`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },
};

export default studentApi;
