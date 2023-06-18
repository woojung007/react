import React, { useContext } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styles from '../../../TodoPage.module.css';
import { ThemeContext } from 'React-2305/project/todo/context/ThemeProvider';

export default function Todo({ todo, onDelete, onUpdate }) {
    const { darkMode } = useContext(ThemeContext);
    const { text, status } = todo;

    const handleDelete = () => {
        onDelete(todo);
    };

    const handleChange = (e) => {
        const status = e.target.checked ? 'Completed' : 'Active';

        onUpdate({
            ...todo,
            status,
        });
    };

    return (
        <div className={styles.todo_item}>
            <input type='checkbox' id='checkbox' onChange={handleChange} checked={status === 'Completed'} />

            <label htmlFor='checkbox'>{text}</label>

            <button onClick={handleDelete} className={`${styles.del_btn}  ${darkMode && styles.dark_mode}`}>
                <BsFillTrashFill />
            </button>
        </div>
    );
}
