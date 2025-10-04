import { useQuery } from "@tanstack/react-query";
import { getListingById, getListings } from "../api/getListing";

export const useAllListings = () => {
    return useQuery({ queryKey: ['listing'], queryFn: getListings, initialData: [] });
};

export const useListingById = (id) => {
    return useQuery({queryKey: ['listing', id], queryFn: () => getListingById(id), initialData: {}});
};