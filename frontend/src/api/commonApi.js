import axiosClient from "./axiosClient";

const commonAPI = {
  getNewsDetail: (_id) => {
    const url = `/mana-news-details/${_id}`;
    return axiosClient.get(url);
  },

  getAllPositions: (token) => {
    const url = `/list-positions`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  getAllNews: () => {
    const url = `/mana-news`;
    return axiosClient.get(url);
  },

  getBusinessInfor: (token, id) => {
    const url = `/teacher/business-mana/${id}`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  changePass: (token, data) => {
    const url = `/updatePassword`;
    return axiosClient.put(url, data, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },
};

export default commonAPI;
