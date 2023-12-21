import axiosClient from "./axiosClient";

const loginAPI = {
  post: (username, password) => {
    const url = "/login";
    return axiosClient.post(url, { username, password });
  },
};

export default loginAPI;
