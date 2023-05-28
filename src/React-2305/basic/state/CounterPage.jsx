import React, { useEffect, useState } from 'react'
import Counter from './Counter'
import './Counter.style.css'

export default function CounterPage() {
    const [total, setTotal] = useState(0)

    const handleClick = () => {
        setTotal((prev) => prev + 1)
    }

    return (
        <div className='counter_wrapper'>
            <div className='banner'>
                Total Count: {total}
                {total > 10 ? '🔥' : '❄️'}
            </div>

            <Counter total={total} handleClick={handleClick} />
            <Counter total={total} handleClick={handleClick} />
        </div>
    )
}
