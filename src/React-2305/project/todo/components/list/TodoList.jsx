import { useContext, useEffect, useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styles from '../../Todo.module.css';
import { ThemeContext } from '../../context/ThemeProvider';
import { TodosContext } from '../../context/TodosProvider';

export default function TodoList() {
    const { todos, setTodos } = useContext(TodosContext);
    const { darkMode } = useContext(ThemeContext);
    const [isChecked, setChecked] = useState(false);

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const handleChecked = (e) => {
        setChecked(!isChecked);

        const todoList = todos.filter((todo) => todo.id !== Number(e.target.id));

        const newTodos = todos
            .filter((todo) => todo.id === Number(e.target.id))
            .map((item) => {
                return {
                    ...item,
                    checked: isChecked,
                };
            });

        setTodos([...todoList, ...newTodos].sort((a, b) => a.id - b.id));
    };

    return (
        <div className={`${styles.content} ${darkMode && styles.dark_mode}`}>
            {todos?.map(({ id, value, checked }) => (
                <div key={id} className={styles.todo_item}>
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
