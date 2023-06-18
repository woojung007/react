import { useContext, useEffect, useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styles from '../../Todo.module.css';
import { ThemeContext } from '../../context/ThemeProvider';
import useTodos from '../../hooks/useTodos';

export default function TodoList() {
    const [todos, setTodos] = useTodos();
    const { darkMode } = useContext(ThemeContext);
    const [isChecked, setChecked] = useState(false);

    // 삭제
    const deleteTodo = (id) => {
        localStorage.setItem(
            'todos',
            JSON.stringify(JSON.parse(localStorage.getItem('todos')).filter((todo) => todo.id !== id)),
        );
    };

    // 완료 표시할 때
    const handleChecked = (e) => {
        setChecked(!isChecked);

        // 전체 todo 리스트를 가져온다.
        const todos = JSON.parse(localStorage.getItem('todos')) || [];

        // 현재 todo의 checked를 변경해준다.
        const todoList = todos.filter((todo) => todo.id !== Number(e.target.id));

        const newTodos = todos
            .filter((todo) => todo.id === Number(e.target.id))
            .map((item) => {
                return {
                    ...item,
                    checked: isChecked,
                };
            });

        console.log('todoList ==> ', todoList);
        console.log('newTodos ==> ', newTodos);

        setTodos([...todoList, ...newTodos].sort((a, b) => a.id - b.id));
        localStorage.setItem('todos', JSON.stringify([...todoList, ...newTodos].sort((a, b) => a.id - b.id)));
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
                        id={id}
                        value={isChecked}
                        type='checkbox'
                        defaultChecked={checked}
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
