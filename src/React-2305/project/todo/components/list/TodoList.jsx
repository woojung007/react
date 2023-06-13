import { useContext, useEffect } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styles from '../../Todo.module.css';
import { ThemeContext } from '../../context/ThemeProvider';
import { TodosContext } from '../../context/TodosProvider';

export default function TodoList() {
    const { todos, setTodos } = useContext(TodosContext);
    const { darkMode } = useContext(ThemeContext);

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <div className={`${styles.content} ${darkMode && styles.dark_mode}`}>
            {todos?.map(({ id, value, checked }, idx) => (
                <div key={idx} className={styles.todo_item}>
                    <input type='checkbox' defaultChecked={checked} />
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
