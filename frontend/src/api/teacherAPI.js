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

  getReportDetail: (token) => {
    const url = "/teacher/mana-intern/regular-report/details";
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },
};

export default teacherApi;
