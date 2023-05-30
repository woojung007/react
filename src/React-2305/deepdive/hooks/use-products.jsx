import { useEffect, useState } from 'react';

export default function useProducts({ salesOnly }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const fetchProducts = () => {
        fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log('🔥 데이터를 네트워크에서 받아옴');

                setProducts(data);
            })
            .catch((error) => setError('에러 발생!!'))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        setLoading(true);
        setError(undefined);

        fetchProducts();

        return () => {
            console.log('🧹 깨끗하게 청소하는 일들을 합니다');
        };
    }, [salesOnly]);

    return [loading, error, products];
}
