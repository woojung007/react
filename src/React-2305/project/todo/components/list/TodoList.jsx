import { useContext, useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styles from '../../Todo.module.css';
import { ThemeContext } from '../../context/ThemeProvider';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
    // const [todos, setTodos] = useTodos();
    const [todos, setTodos] = useState([]);
    const { darkMode } = useContext(ThemeContext);

    // 삭제
    const deleteTodo = (text) => {
        localStorage.setItem(
            'todos',
            JSON.stringify(JSON.parse(localStorage.getItem('todos')).filter((todo) => todo.text !== text)),
        );
    };

    // 체크 표시할 때
    const handleChecked = (e) => {
        // 전체 todo 리스트를 가져온다.
        const filteredTodos =
            JSON.parse(localStorage.getItem('todos')).filter((todo) => todo.text !== e.target.id) || [];

        // 현재 todo의 checked를 변경해준다.
        const currentTodo = JSON.parse(localStorage.getItem('todos'))
            .filter((todo) => todo.text === e.target.id)
            .map((todo) => ({
                ...todo,
                checked: Boolean(e.target.checked),
            }));

        const newTodos = [...filteredTodos, ...currentTodo];

        localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    };

    return (
        <div className={`${styles.content} ${darkMode && styles.dark_mode}`}>
            {todos.map(({ id, text, checked }) => (
                <div key={id} className={styles.todo_item}>
                    <input
                        onChange={handleChecked}
                        id={id}
                        value={Boolean(checked)}
                        type='checkbox'
                        defaultChecked={Boolean(checked)}
                    />
                    <div className={styles.todo}>{text}</div>
                    <div
                        onClick={deleteTodo.bind(this, text)}
                        className={`${styles.del_icon}  ${darkMode && styles.dark_mode}`}
                    >
                        <BsFillTrashFill />
                    </div>
                </div>
            ))}

            {/* todo가 추가되면 나한테 알려줘~  */}
            <AddTodo onAdd={handleAdd} />
        </div>
    );
}
