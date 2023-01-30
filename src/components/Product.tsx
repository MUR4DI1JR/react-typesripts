import React, {useState} from 'react';
import {IProduct} from "../models";

interface ProductProps {
    product: IProduct
}

const Product = ({product}: ProductProps) => {
    const [details, setDetails] = useState(false);

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6" alt="image"/>
            <h1>{product.title}</h1>
            <p className="font-bold">{product.price}</p>
            <button
                onClick={() => setDetails(prevState => !prevState)}
                className={`py-2 px-4 border ${details ? "bg-blue-400" : "bg-yellow-400"}`}>
                {details ? "Hide" : "Show"} Details
            </button>
            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
            </div>
            }
        </div>
    );
};

export default Product;