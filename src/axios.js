import axios from "axios";

const instance = axios.create({
    baseURL: "https://ecom-backend-app-b4mz.onrender.com",
});

export default instance;
