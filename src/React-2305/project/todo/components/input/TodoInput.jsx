import React, { useState } from 'react';
import styles from '../..//Todo.module.css';

export default function TodoInput({ setTodos }) {
    // TODO: custom id로 변경
    const [todo, setTodo] = useState({
        id: 123,
        value: '',
        checked: false,
    });

    const handleChangeTodo = (e) => {
        setTodo((prev) => ({
            ...prev,
            value: e.target.value,
        }));
    };

    const addTodo = () => {
        setTodos((prev) => [...prev, todo]);
        setTodo({
            id: 123,
            value: '',
            checked: false,
        });
    };

    return (
        <div className={styles.input_wrapper}>
            <input
                onChange={handleChangeTodo}
                value={todo.value || ''}
                type='text'
                className={styles.todo_input}
                placeholder='Add Todo'
            />
            <button onClick={addTodo} className={styles.add_btn}>
                Add
            </button>
        </div>
    );
}
