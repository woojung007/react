import React, { useState } from 'react';
import styles from '../..//Todo.module.css';

export default function TodoInput({ todos, setTodos }) {
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

    // const postTodo = async () => {
    //     const result = await fetch('data/todos.json', {
    //         method: 'POST',
    //         body: JSON.stringify(todo),
    //     });
    // };

    const addTodo = () => {
        // TODO: add todo
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
