import {useEffect, useState} from "react";
import {IProduct} from "../models";
import axios, {AxiosError} from "axios";

export const useProducts = () =>{
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const addProduct = (product: IProduct) =>{
        setProducts(prev => [...prev, product])
    }

    async function fetchProducts() {
        try {
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
            setProducts(response.data);
            setLoading(false);
        }catch (e: unknown){
            const error = e as AxiosError
            setLoading(false)
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, []);

    return{products, loading, error, addProduct}
}