import {client} from '../client.js';

export const login = (data) => client.post('/login', data)
    .then(r => r.data);