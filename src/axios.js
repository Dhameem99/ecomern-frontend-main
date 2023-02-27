import axios from "axios";

const instance = axios.create({
    baseURL: "https://ecom-back-end-pt46.onrender.com",
});

export default instance;
