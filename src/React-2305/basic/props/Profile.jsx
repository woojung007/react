import React from 'react'
import './Profile.style.css'
import Avatar from './avatar/Avatar'

export default function Profile({ isNew, image, name, title }) {
    return (
        <div className='profile'>
            <Avatar isNew={isNew} image={image} />
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    )
}
