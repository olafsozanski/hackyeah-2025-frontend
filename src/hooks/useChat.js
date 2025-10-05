import { useQuery } from "@tanstack/react-query";
import { getChatById, getChats } from "../api/getChat";

export const useAllChats = () => {
    return useQuery({ queryKey: ['chats'], queryFn: getChats, initialData: [] });
};

export const useChatById = (id) => {
    return useQuery({ queryKey: ['chats', id], queryFn: () => getChatById(id), initialData: [] });
};