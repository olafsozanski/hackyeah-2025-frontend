import { client } from "../client";

export const getListings = async () => {
    return await client.get('/listing').then(r => r.data);
};

export const getListingById = async (id) => {
    return await client.get(`/listing/${id}`).then(r => r.data);
};