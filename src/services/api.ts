import axios from "axios"

export const hpApi = axios.create({
    baseURL: "https://hp-api.onrender.com/api/",
    headers: {}
})

export const api = axios.create({
    baseURL: "/api/",
    headers: {}
})