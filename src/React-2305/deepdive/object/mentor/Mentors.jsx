import React, { useState } from 'react'

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

export default function Mentors() {
    const [person, setPerson] = useState(initialPerson)

    // 멘토의 이름 바꾸기
    const handleUpdate = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`)
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`)

        // 1. prev와 같은 사람을 찾는다
        // 2. 이름을 바꿔준다
        const newMentors = person.mentors.map((mentor) => {
            if (mentor.name === prev) {
                return {
                    name: current,
                    // title: mentor.title, => 이 방법 대신 기존의 객체를 모두 한번에 넣어주자
                    ...mentor,
                }
            }

            return mentor
        })

        setPerson((prev) => ({
            ...prev,
            mentors: [...newMentors],
        }))
    }

    // 멘토 추가하기
    const addMentor = () => {
        const name = prompt(`새로 추가할 멘토의 이름은 무엇인가요?`)
        const title = prompt(`새로 추가할 멘토의 타이틀은 무엇인가요?`)

        const newMentor = setPerson((prev) => ({
            ...prev,
            mentors: [
                ...prev.mentors,
                {
                    name,
                    title,
                },
            ],
        }))
    }

    // 멘토 삭제하기
    const deleteMentor = () => {
        const mentorName = prompt(`삭제할 멘토의 이름은 무엇인가요?`)

        const newMentor = setPerson((prev) => ({
            ...prev,
            mentors: prev.mentors.filter(
                (mentor) => mentor.name !== mentorName,
            ),
        }))
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
