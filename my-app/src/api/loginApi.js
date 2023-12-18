import api from "./axiosClient";

const loginAPI = (email, password) => {
    return api.post('/auth/token', {email, password})
}

export {loginAPI}