import axiosClient from "./axiosClient";

const studentApi = {
  getAll: () => {
    const url = "/student";
    return axiosClient.get(url);
  },

  get: (id, token) => {
    const url = `/teacher/teacher-mana/${id}`;
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

  submitAspiration: (token, promised_positions) => {
    const url = `/student/internship-register/collab/register`;
    return axiosClient.post(
      url,

      promised_positions,

      {
        headers: {
          token: `Bearer ${token}`,
        },
      }
    );
  },

  getAspirationByID: (token) => {
    const url = `get_aspiration`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  submitInternOut: (token, internInfor) => {
    const url = `/result`;
    return axiosClient.post(url, internInfor, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  submitReport: (token, report) => {
    const url = `/report`;
    return axiosClient.post(url, report, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },
};

export default studentApi;
