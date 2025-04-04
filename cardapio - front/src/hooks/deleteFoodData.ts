import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const deleteData = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/food/${id}`);
};

export function deleteFoodData() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["food-data"] });
        },
    });
}