import axios, { AxiosPromise } from "axios";
import { FoodData } from "../Interfaces/FoodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080"

const updateData = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.put(API_URL + "/food", data)
    return response
}

export function updateFoodData() {
    const queryClient = useQueryClient()

    const mutate = useMutation({
        mutationFn: updateData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["food-data"] })
        }
    })


    return mutate
}