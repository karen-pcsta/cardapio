import axios, { AxiosPromise } from "axios";
import { FoodData } from "../Interfaces/FoodData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080"

const fetchData = async (): AxiosPromise<FoodData[]> => {
    const response = axios.get(API_URL + "/food")
    return response
}

export function useFoodData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ["food-data"],
        retry: 2
    })

    //  console.log(query)

    return {
        ...query,
        data: query.data?.data
    }
}