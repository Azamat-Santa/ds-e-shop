import axios from 'axios';
export const BASE_URL = 'https://reqres.in/api/'
export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})