import { personReducer } from 'React-2305/deepdive/reducer/person-reducer';
import { useCallback, useReducer } from 'react';
import Button from './Button';

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
};

export default function MentorsButton() {
    const [person, dispatch] = useReducer(personReducer, initialPerson);

    // 멘토의 이름 바꾸기
    const handleUpdate = useCallback(() => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

        dispatch({ type: 'updated', prev, current });
    }, []);

    // 멘토 추가하기
    const addMentor = useCallback(() => {
        const name = prompt(`새로 추가할 멘토의 이름은 무엇인가요?`);
        const title = prompt(`새로 추가할 멘토의 타이틀은 무엇인가요?`);

        dispatch({
            type: 'added',
            name,
            title,
        });
    }, []);

    // 멘토 삭제하기
    const deleteMentor = useCallback(() => {
        const name = prompt(`삭제할 멘토의 이름은 무엇인가요?`);

        dispatch({
            type: 'deleted',
            name,
        });
    }, []);

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
            <Button text='멘토의 이름 바꾸기' onClick={handleUpdate} />
            <Button text='멘토 추가하기' onClick={addMentor} />
            <Button text='멘토 삭제하기' onClick={deleteMentor} />
        </div>
    );
}
