import React, { useState } from 'react';
import ProductsExceptions from './ProductsExceptions';

export default function ProductPageExceptions() {
    const [showProducts, setShowProducts] = useState(true);

    const handleClick = () => {
        setShowProducts((show) => !show);
    };

    return (
        <div>
            {showProducts && <ProductsExceptions />}
            <button onClick={handleClick}>Toggle</button>
        </div>
    );
}
