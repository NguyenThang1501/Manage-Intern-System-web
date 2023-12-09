import api from "./api";

const loginAPI = (email, password) => {
    return api.post('/auth/token', {email, password})
}

export {loginAPI}