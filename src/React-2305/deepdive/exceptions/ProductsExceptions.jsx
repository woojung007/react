import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductsExceptions() {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const navigate = useNavigate();

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    const fetchProducts = () => {
        fetch(`data/${checked ? 'sale_' : ''}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log('🔥 데이터를 네트워크에서 받아옴');

                setProducts(data);
            })
            .catch((error) => setError('에러 발생!!'))
            .finally(() => setLoading(false));
    };

    const moveToErrorPage = () => {
        navigate('/error');
    };

    useEffect(() => {
        setLoading(true);
        setError(undefined);

        fetchProducts();

        return () => {
            console.log('🧹 깨끗하게 청소하는 일들을 합니다');
        };
    }, [checked]);

    const handleCountUp = () => {
        setCount((prev) => prev + 1);
    };

    if (loading) return <p>Loading...</p>;

    if (error) return <p>{error}</p>;

    return (
        <>
            <input id='checkbox' type='checkbox' value={checked} onChange={handleChange} />
            {/* label - 해당 html의 id 필요 */}
            <label htmlFor='checkbox'> Show Only 🔥 Sale </label>
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
            <button onClick={handleCountUp}>{count}</button>
        </>
    );
}
