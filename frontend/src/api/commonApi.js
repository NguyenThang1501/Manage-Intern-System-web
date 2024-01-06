import axiosClient from "./axiosClient";

const commonAPI = {
  getNewsDetail: (_id) => {
    const url = `/mana-news-details/${_id}`;
    return axiosClient.get(url);
  },

  getAllPositions: () => {
    const url = `/getAllPosition`;
    return axiosClient.get(url);
  },

  getNews: () => {
    const url = `mana-news`;
    return axiosClient.get(url);
  },
};

export default commonAPI;
