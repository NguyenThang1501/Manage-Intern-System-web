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

  getNewsByID: (_id) => {
    const url = `/mana-news/${_id}`;
    return axiosClient.get(url);
  },

  getAllNews: () => {
    const url = `/mana-news`;
    return axiosClient.get(url);
  },
};

export default commonAPI;
