import axiosClient from "./axiosClient";

const teacherApi = {
  getStudentInfor: (token) => {
    const url = `/teacher/student-mana`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  getReport: (token) => {
    const url = "/teacher/mana-intern/regular-report";
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  getReportDetail: (id, token) => {
    const url = `/teacher/mana-intern/regular-report/details/${id}`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  getBusinessNewsCard: (token) => {
    const url = `/teacher/business-mana`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  getJobInfor: (id, token) => {
    const url = `/mana-news-details/${id}`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  getBusinessInfor: (id, token) => {
    const url = `/teacher/business-mana/${id}`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  getResultIntern: (token) => {
    const url = `/get_all_result`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  deletePosition: (token, id) => {
    const url = `teacher/delete-positions/${id}`;
    return axiosClient.delete(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  addPosition: (token, data) => {
    const url = `/teacher/create-positions`;
    return axiosClient.post(url, data, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  updatePosition: (token, data, id) => {
    const url = `/teacher/update-positions/${id}`;
    return axiosClient.put(url, data, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  listRegister: (token) => {
    const url = `/teacher/list-register`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  getStudentTopicReport: (token, id) => {
    const url = `/teacher-intern/final-report/${id}`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  updateMidScore: (token, data, id) => {
    const url = `/teacher/mana-intern/update-mid-score/${id}`;
    return axiosClient.put(url, data, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  updateFinalScore: (token, data, id) => {
    const url = `/teacher/mana-intern/update-final-score/${id}`;
    return axiosClient.put(url, data, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  getTeacherInfor: (token) => {
    const url = `/teacher/profile`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`
      }
    })
  }
};

export default teacherApi;
