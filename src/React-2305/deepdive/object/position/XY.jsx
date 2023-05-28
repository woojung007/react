import React, { useEffect, useState } from 'react'
import '../../deepdive.css'

export default function XY() {
    const [positon, setPosition] = useState({
        x: 0,
        y: 0,
        z: 0,
    })

    // on에 관련된 것은 통상적으로 event가 확실하기 때문에 event ⇒ e로 작성
    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })

        // 만약 수평으로만 이동이 가능하게 하고 싶다면 ?
        setPosition((prev) => ({
            ...prev,
            x: e.clientX,
        }))
    }

    return (
        <div className='container' onMouseMove={handleMouseMove}>
            <div
                className='pointer'
                style={{
                    transform: `translate(${positon.x}px, ${positon.y}px)`,
                }}
            />
        </div>
    )
}
