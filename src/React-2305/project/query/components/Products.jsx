import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function Products() {
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked((prev) => !prev);

    const {
        isLoading,
        error,
        data: products,
    } = useQuery(['products', checked], async () => {
        console.log('fetching...');
        return fetch(`data/${checked ? 'sale_' : ''}products.json`).then((res) => res.json());
    });

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>{error}</p>;

    return (
        <>
            <label>
                <input type='checkbox' checked={checked} onChange={handleChange} />
                Show Only 🔥 Sale
            </label>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </>
    );
}
