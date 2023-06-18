import { useContext, useState } from 'react';
import styles from '../..//Todo.module.css';
import { ThemeContext } from '../../context/ThemeProvider';

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
            id: '고유한 값',
            text,
            checked: false,
        });

        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className={`${styles.input_wrapper} ${darkMode && styles.dark_mode}`}>
            <input
                onChange={handleChange}
                value={text}
                type='text'
                className={styles.todo_input}
                placeholder='Add Todo'
            />
            <button className={`${styles.add_btn} ${darkMode && styles.dark_mode}`}>Add</button>
        </form>
    );
}
