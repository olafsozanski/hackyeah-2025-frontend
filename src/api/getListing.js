import { client } from "../client";

const getListing = async () => {
    return await client.get('/listing').then(r => r.data);
};

export default getListing;