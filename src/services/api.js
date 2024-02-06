import axios from "axios";

export const api = axios.create({
    baseURL: "https://food-explorer-backend-bv2o.onrender.com"
    // baseURL: "http://localhost:3333"
});

