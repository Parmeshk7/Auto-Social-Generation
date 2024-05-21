import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://auto-social-generation-production.up.railway.app"
    
})

export default axiosInstance;
