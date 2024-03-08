import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import React from "react";

const getProducts = (id) => {
    
    return id?axios.get(`http://localhost:3004/products/${id}`) : axios.get('http://localhost:3004/products')
    // return axios.get('http://localhost:3004/products/1')    
};

export const useProductQuery =(id) =>{

    return useQuery({
        queryKey : ['item-list',id],
        queryFn : () => getProducts(id),
        retry : 1,
        select : (data) => {
            return data.data;
        }

    });

};
