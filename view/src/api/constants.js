import axios from "axios"
const baseURL = 'http://localhost:3000/api/'
export const uploadsURL = '127.0.0.1:3000/'

export const mainInstance = axios.create({
    baseURL,
})