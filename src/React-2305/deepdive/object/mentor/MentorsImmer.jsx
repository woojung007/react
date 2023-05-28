import React, { useState } from 'react'
import { useImmer } from 'use-immer'

const initialPerson = {
    name: '앨리',
    title: '개발자',
    mentors: [
        {
            name: '밥',
            title: '시니어개발자',
        },
        {
            name: '제임스',
            title: '시니어개발자',
        },
    ],
}

export default function MentorsImmer() {
    const [person, updatePerson] = useImmer(initialPerson)

    // 멘토의 이름 바꾸기
    const handleUpdate = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`)
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`)

        updatePerson((person) => {
            const mentor = person.mentors.find((mentor) => mentor.name === prev)
            mentor.name = current
        })
    }

    // 멘토 추가하기
    const addMentor = () => {
        const name = prompt(`새로 추가할 멘토의 이름은 무엇인가요?`)
        const title = prompt(`새로 추가할 멘토의 타이틀은 무엇인가요?`)

        updatePerson((person) => {
            person.mentors.push({ name, title })
        })
    }

    // 멘토 삭제하기
    const deleteMentor = () => {
        const mentorName = prompt(`삭제할 멘토의 이름은 무엇인가요?`)
        updatePerson((person) => {
            const index = person.mentors.findIndex(
                (mentor) => mentor.name === mentorName,
            )

            if (index < 0) {
                return alert('이름을 다시 입력해주세요.')
            }

            person.mentors.splice(index, 1)
        })
    }

    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>{person.name}의 멘토는 : </p>

            <ul>
                {person.mentors.map((mentor, index) => (
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <button onClick={handleUpdate}>멘토의 이름 바꾸기</button>
            <button onClick={addMentor}>멘토 추가하기</button>
            <button onClick={deleteMentor}>멘토 삭제하기</button>
        </div>
    )
}
