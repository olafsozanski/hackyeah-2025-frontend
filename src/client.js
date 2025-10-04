import {Axios} from 'axios';

export const client = new Axios({
    baseURL: 'http://localhost:8000/',
});