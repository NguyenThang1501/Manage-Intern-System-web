import axiosClient from "./axiosClient";

const teacherApi = {
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
    const url = `/teacher/mana-business`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  getBusinessInfor: (id, token) => {
    const url = `/mana-news-details/${id}`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },
};

export default teacherApi;
