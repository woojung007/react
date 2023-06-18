import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

export default function AddTodo({ onAdd }) {
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
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} onChange={handleChange} value={text} type='text' placeholder='Add Todo' />
            <button className={styles.button}>Add</button>
        </form>
    );
}
