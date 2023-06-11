import { BsFillTrashFill } from 'react-icons/bs';
import styles from '../../Todo.module.css';
import useTodos from '../../hooks/use-todos';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeProvider';

export default function TodoList() {
    const [todos, setTodos] = useTodos();

    const { darkMode } = useContext(DarkModeContext);

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <div className={`${styles.content} ${darkMode && styles.dark_mode}`}>
            {todos?.map(({ id, value, checked }) => (
                <div key={id} className={styles.todo_item}>
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
