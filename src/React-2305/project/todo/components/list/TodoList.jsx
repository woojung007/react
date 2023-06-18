import { useContext, useState } from 'react';
import styles from '../../Todo.module.css';
import { ThemeContext } from '../../context/ThemeProvider';
import AddTodo from './add/AddTodo';
import Todo from './item/Todo';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const { darkMode } = useContext(ThemeContext);

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

    return (
        <div className={`${styles.content} ${darkMode && styles.dark_mode}`}>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} onDelete={handleDelete} onUpdate={handleUpdate} />
            ))}

            {/* todo가 추가되면 나한테 알려줘~  */}
            <AddTodo onAdd={handleAdd} />
        </div>
    );
}
