import axiosClient from "./axiosClient";

const businessApi = {
  addNews: (
    business,
    position,
    endTime,
    describe,
    requirement,
    profit,
    address,
    token
  ) => {
    const url = "/add_news";
    return axiosClient.post(url, {
      business,
      position,
      endTime,
      describe,
      requirement,
      profit,
      address,
      header: {
        token: `Bearer ${token}`,
      },
    });
  },
};

export default businessApi;
