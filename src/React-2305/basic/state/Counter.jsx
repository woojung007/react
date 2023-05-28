import React, { useState } from 'react'
import './Counter.style.css'

export default function Counter({ total, handleClick }) {
    const [count, setCount] = useState(0)

    const handleCountUp = () => {
        setCount((prev) => prev + 1)
        handleClick()
    }

    return (
        <div className='counter'>
            <p className='number'>
                {count}
                <span className='total'>/{total}</span>
            </p>

            <button className='button' onClick={handleCountUp}>
                Add +
            </button>
        </div>
    )
}
