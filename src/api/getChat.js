import { client } from "../client";

export const getChats = async () => {
    return await client.get('/me/chats').then(r => r.data);    
};

export const getChatById = async (id) => {
    return await client.get(`/chats/${id}/messages`).then(r => r.data);    
};
