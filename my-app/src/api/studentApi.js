import axiosClient from "./axiosClient";

const studentApi = {
    getAll: () => {
        const url = '/students';
        return axiosClient.get(url);
    },

    get: (id)=> {
        const url = `/students/${id}`;
        return axiosClient.get(url)
    }
}

export default studentApi