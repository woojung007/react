import { useContext, useState } from 'react';
import styles from '../..//Todo.module.css';
import { ThemeContext } from '../../context/ThemeProvider';
import useTodos from '../../hooks/useTodos';
import _ from 'lodash';

export default function TodoInput() {
    const [todos, setTodos] = useTodos();
    // TODO: custom id로 변경
    const [todo, setTodo] = useState({
        id: 123,
        value: '',
        checked: false,
    });

    const { darkMode } = useContext(ThemeContext);

    const handleChangeTodo = (e) => {
        setTodo((prev) => ({
            ...prev,
            value: e.target.value,
        }));
    };

    const addTodo = () => {
        setTodos((prev) => [...prev, todo]);

        setTodo({
            id: '123',
            value: '',
            checked: false,
        });

        localStorage.setItem('todos', JSON.stringify([...todos, todo]));

        // setTodos(JSON.parse(localStorage.getItem('todos')));
    };

    const handleKeyUp = (e) => {
        if (!e.target.value) return;
        if (e.key === 'Enter') {
            handleChangeTodo(e);
            addTodo();
        }
    };

    return (
        <div className={`${styles.input_wrapper} ${darkMode && styles.dark_mode}`}>
            <input
                onChange={handleChangeTodo}
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
