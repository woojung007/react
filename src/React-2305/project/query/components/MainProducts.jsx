import React, { useState } from 'react';
import Products from './Products';
import styles from './MainProducts.module.css';
import { useQueryClient } from '@tanstack/react-query';

export default function MainProducts() {
    const [showLeftProducts, setShowLeftProducts] = useState(true);
    const [showRightProducts, setShowRightProducts] = useState(true);

    const client = useQueryClient();
    return (
        <main className={styles.container}>
            <div>
                {showLeftProducts && <Products />}
                <button onClick={() => setShowLeftProducts((show) => !show)}>Toggle</button>
            </div>
            <div>
                {showRightProducts && <Products />}
                <button onClick={() => setShowRightProducts((show) => !show)}>Toggle</button>
            </div>
            <button
                onClick={() => {
                    client.invalidateQueries(['products', false]);
                }}
            >
                정보가 업데이트 되었음!
            </button>
        </main>
    );
}
