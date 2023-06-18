import React, { useContext } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styles from '../../../Todo.module.css';
import { ThemeContext } from 'React-2305/project/todo/context/ThemeProvider';

export default function Todo({ todo, onDelete, onUpdate }) {
    const { darkMode } = useContext(ThemeContext);
    const { text, checked } = todo;

    const handleDelete = () => {
        onDelete(todo);
    };

    const handleChange = (e) => {
        const checked = e.target.checked ? true : false;

        onUpdate({
            ...todo,
            checked: checked,
        });
    };

    return (
        <div className={styles.todo_item}>
            <input
                type='checkbox'
                onChange={handleChange}
                id={todo.id}
                value={Boolean(checked)}
                defaultChecked={Boolean(checked)}
            />

            <label htmlFor='checkbox'>{text}</label>

            <button onClick={handleDelete} className={`${styles.del_btn}  ${darkMode && styles.dark_mode}`}>
                <BsFillTrashFill />
            </button>
        </div>
    );
}
