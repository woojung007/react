import { useContext, useState } from 'react';
import styles from '../..//Todo.module.css';
import { ThemeContext } from '../../context/TodoThemeProvider';
import useTodos from '../../hooks/useTodos';

export default function TodoInput() {
    const [todos, setTodos] = useTodos();
    // TODO: custom id로 변경
    const [todo, setTodo] = useState({
        id: 1,
        value: '',
        checked: false,
    });

    const { darkMode } = useContext(ThemeContext);

    const handleChange = (e) => {
        setTodo((prev) => ({
            ...prev,
            value: e.target.value,
        }));
    };

    const addTodo = () => {
        const newTodo = {
            ...todo,
            value: todo.value.replaceAll(' ', ''),
        };

        setTodos((prev) => [...prev, newTodo]);

        setTodo({
            id: 1,
            value: '',
            checked: false,
        });

        localStorage.setItem('todos', JSON.stringify([...todos, todo]));

        // setTodos(JSON.parse(localStorage.getItem('todos')));
    };

    const handleKeyUp = (e) => {
        if (!e.target.value) return;
        if (e.key === 'Enter') {
            handleChange(e);
            addTodo();
        }
    };

    return (
        <div className={`${styles.input_wrapper} ${darkMode && styles.dark_mode}`}>
            <input
                onChange={handleChange}
                value={todo.value || ''}
                type='text'
                className={styles.todo_input}
                placeholder='Add Todo'
                onKeyUp={handleKeyUp}
            />
            <button onClick={addTodo} className={`${styles.add_btn} ${darkMode && styles.dark_mode}`}>
                Add
            </button>
        </div>
    );
}
