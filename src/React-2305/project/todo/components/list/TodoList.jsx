import { useContext, useEffect, useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styles from '../../Todo.module.css';
import { ThemeContext } from '../../context/ThemeProvider';
import useTodos from '../../hooks/useTodos';

export default function TodoList() {
    const [todos, setTodos] = useTodos();
    const { darkMode } = useContext(ThemeContext);

    // 삭제
    const deleteTodo = (id) => {
        localStorage.setItem(
            'todos',
            JSON.stringify(JSON.parse(localStorage.getItem('todos')).filter((todo) => todo.id !== id)),
        );
    };

    // 체크 표시할 때
    const handleChecked = (e) => {
        // 전체 todo 리스트를 가져온다.
        const filteredTodos =
            JSON.parse(localStorage.getItem('todos')).filter((todo) => todo.value !== e.target.id) || [];

        // 현재 todo의 checked를 변경해준다.
        const currentTodo = JSON.parse(localStorage.getItem('todos'))
            .filter((todo) => todo.value === e.target.id)
            .map((todo) => ({
                ...todo,
                checked: Boolean(e.target.checked),
            }));

        const newTodos = [...filteredTodos, ...currentTodo];

        localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('todos')) || []);
    }, []);

    return (
        <div className={`${styles.content} ${darkMode && styles.dark_mode}`}>
            {todos?.map(({ id, value, checked }) => (
                <div key={value} className={styles.todo_item}>
                    <input
                        onChange={handleChecked}
                        id={value}
                        value={Boolean(checked)}
                        type='checkbox'
                        defaultChecked={Boolean(checked)}
                    />
                    <div className={styles.todo}>{value}</div>
                    <div
                        onClick={deleteTodo.bind(this, id)}
                        className={`${styles.del_icon}  ${darkMode && styles.dark_mode}`}
                    >
                        <BsFillTrashFill />
                    </div>
                </div>
            ))}
        </div>
    );
}
