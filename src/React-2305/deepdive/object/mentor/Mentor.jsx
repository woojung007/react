import React, { useState } from 'react'

export default function Mentor() {
    const [person, setPerson] = useState({
        name: '앨리',
        title: '개발자',
        mentor: {
            name: '밥',
            title: '시니어개발자',
        },
    })

    const handleChangeMentorName = () => {
        const name = prompt(`what's your mentor's name?`)
        // 소괄호로 꼭 묶어줘야 함
        setPerson((prev) => ({
            ...prev,

            mentor: {
                ...prev.mentor,
                name,
            },
        }))
    }

    const handleChangeMentorTitle = () => {
        const title = prompt(`what's your mentor's title?`)

        setPerson((prev) => ({
            ...prev,

            mentor: {
                ...prev.mentor,
                title,
            },
        }))
    }

    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>
                {person.name}의 멘토는 {person.mentor.name} (
                {person.mentor.title})
            </p>
            <button onClick={handleChangeMentorName}>멘토 이름 바꾸기</button>
            <button onClick={handleChangeMentorTitle}>
                멘토 타이틀 바꾸기
            </button>
        </div>
    )
}
