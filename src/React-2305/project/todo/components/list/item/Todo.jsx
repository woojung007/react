import { BsFillTrashFill } from 'react-icons/bs';
import styles from './Todo.module.css';

export default function Todo({ todo, onDelete, onUpdate }) {
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
        <li className={styles.todo}>
            <input
                className={styles.checkbox}
                type='checkbox'
                id='checkbox'
                onChange={handleChange}
                checked={status === 'Completed'}
            />

            <label htmlFor='checkbox' className={`${styles.text}`}>
                {text}
            </label>

            <div className={styles.icon}>
                <button className={styles.button} onClick={handleDelete}>
                    <BsFillTrashFill />
                </button>
            </div>
        </li>
    );
}
