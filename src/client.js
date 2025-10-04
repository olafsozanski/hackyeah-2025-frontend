import {Axios} from 'axios';

export const client = new Axios({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json',
    },
});

client.interceptors.request.use((config) => {
    config.data = JSON.stringify(config.data);
    return config;
});

client.interceptors.response.use((response) => {
    response.data = JSON.parse(response.data);
    return response;
});