import {Axios} from 'axios';
import {tokenState} from './store/auth.js';
import {store} from './store/store.js';

export const client = new Axios({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json',
    },
});

client.interceptors.request.use((config) => {
    config.data = JSON.stringify(config.data);
    const token = store.get(tokenState);
    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
});

client.interceptors.response.use((response) => {
    response.data = JSON.parse(response.data);
    return response;
});