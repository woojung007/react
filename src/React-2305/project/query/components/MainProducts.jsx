import React, { useState } from 'react';
import Products from './Products';
import styles from './MainProducts.module.css';

export default function MainProducts() {
    const [showLeftProducts, setShowLeftProducts] = useState(true);
    const [showRightProducts, setShowRightProducts] = useState(true);
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
        </main>
    );
}
