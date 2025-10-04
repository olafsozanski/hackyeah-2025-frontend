import { useQuery } from "@tanstack/react-query";
import getListing from "../api/getListing";

const useAllListing = () => {
    return useQuery({ queryKey: ['listing'], queryFn: getListing, initialData: [] });
}

export default useAllListing;