import axios from "axios";

const instance = axios.create({
    baseURL: "https://ecom-backend-app-v9nl.onrender.com",
});

export default instance;
