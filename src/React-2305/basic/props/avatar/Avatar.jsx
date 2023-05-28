import React from 'react'
import '../Profile.style.css'

export default function Avatar({ isNew, image }) {
    return (
        <div className='avatar'>
            {isNew && <span className='new'>New</span>}
            <img src={image} alt='avatar' className='photo' />
        </div>
    )
}
