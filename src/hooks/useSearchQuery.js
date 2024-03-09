import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import React from "react";

const getProducts = (searchQuery) => {

    return searchQuery?axios.get(`http://localhost:3004/products?q=${searchQuery}`) : axios.get('http://localhost:3004/products')

};

export const useSearchQuery =(searchQuery) =>{

    return useQuery({
        queryKey : ['item-list',searchQuery],
        queryFn : () => getProducts(searchQuery),
        retry : 1,
        gcTime : 60000,
        select : (data) => {
            return data.data;
        }

    });

};
