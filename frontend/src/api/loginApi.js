import axiosClient from "./axiosClient";

const loginAPI = {
  post: (_id, pass) => {
    const url = "/login";
    return axiosClient.post(url, { _id, pass });
  },
};

export default loginAPI;
