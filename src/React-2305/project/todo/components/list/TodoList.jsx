import { useState } from 'react';
import { useTodoDarkMode } from '../../context/TodoThemeProvider';
import styles from './TodoList.module.css';
import AddTodo from './add/AddTodo';
import Todo from './item/Todo';

export default function TodoList({ filter }) {
    const [todos, setTodos] = useState([]);
    const { darkMode } = useTodoDarkMode();

    // 추가
    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    };

    // 삭제
    const handleDelete = (deleted) => {
        setTodos(todos.filter((todo) => todo.id !== deleted.id));
    };

    // 수정
    const handleUpdate = (updated) => {
        setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
    };

    const filteredTodos = getFilteredItems(todos, filter);

    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {filteredTodos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onDelete={handleDelete} onUpdate={handleUpdate} />
                ))}

                {/* todo가 추가되면 나한테 알려줘~  */}
            </ul>
            <AddTodo onAdd={handleAdd} />
        </section>
    );
}

function getFilteredItems(todos, filter) {
    if (filter === 'All') {
        return todos;
    }

    return todos.filter((todo) => todo.status === filter);
}
