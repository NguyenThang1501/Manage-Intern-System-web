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

  submitProject: (token, data) => {
    const url = `/final_report`;
    return axiosClient.post(url, data, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  getResultIntern: (token) => {
    const url = `/student/internship-register/collab/result`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  checkTimeRegister: (token) => {
    const url = `/checkTime`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  getTopicIntern: (token) => {
    const url = `/student-intern/final-report`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  updateTopicIntern: (token, data) => {
    const url = `/student/update-project`;
    return axiosClient.put(url, data, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  uploadCV: (token, file, id) => {
    const url = `/apply-job/${id}`;
    return axiosClient.post(url, file, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },
};

export default studentApi;
