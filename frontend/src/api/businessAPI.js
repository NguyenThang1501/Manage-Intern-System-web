import axiosClient from "./axiosClient";

const businessApi = {
  addNews: (token, data) => {
    const url = "/business/add_news";
    return axiosClient.post(url, data, {
      header: {
        token: `Bearer ${token}`,
      },
    });
  },
  getAllNews: (token) => {
    const url = `/mana-news/self-business`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  getCV: (token, id) => {
    const url = `/getCv-news/${id}`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  getDetailCV: (token, id) => {
    const url = `/business/getCV/${id}`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },
};

export default businessApi;
