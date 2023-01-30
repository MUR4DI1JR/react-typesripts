import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="h-[50px] flex justify-between px-5 items-center bg-gray-500 text-white">
            <span className="font-bold">Muradil React Typesripts</span>
            <span>
                <Link to="/" className="mr-2">Product</Link>
                <Link to="/about">About</Link>
            </span>
        </nav>
    );
};

export default Navigation;