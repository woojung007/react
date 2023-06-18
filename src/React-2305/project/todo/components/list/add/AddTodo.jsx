import { useContext, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeProvider';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

export default function AddTodo({ onAdd }) {
    const { darkMode } = useContext(ThemeContext);
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length === 0) return;

        onAdd({
            id: uuidv4(),
            text,
            status: 'Active',
        });

        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input className={styles.input} onChange={handleChange} value={text} type='text' placeholder='Add Todo' />
            <button className={styles.button}>Add</button>
        </form>
    );
}
