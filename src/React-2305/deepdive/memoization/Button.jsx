import { memo, useMemo } from 'react';

const Button = memo(({ text, onClick }) => {
    console.log('button', text, 're-rendering 🐝');
    const result = useMemo(() => calculateSomething(), []);

    return (
        <button
            onClick={onClick}
            style={{
                background: 'black',
                color: 'white',
                borderRadius: '20px',
                margin: '0.4rem',
            }}
        >
            {text} {result}
        </button>
    );
});

const calculateSomething = () => {
    for (let index = 0; index < 10000; index++) {
        console.log('😅');
    }

    return 10;
};

export default Button;
