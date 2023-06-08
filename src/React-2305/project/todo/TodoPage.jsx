import { useEffect, useState } from 'react';
import styles from './Todo.module.css';
import TodoHeader from './components/header/TodoHeader';
import TodoInput from './components/input/TodoInput';
import TodoList from './components/list/TodoList';

export default function TodoPage() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            // TODO: 로딩 시작
            const response = await fetch('data/todos.json');
            const todos = await response.json();

            setTodos(todos.todos);
        } catch (e) {
            // TODO: error시 보여줄 페이지
        } finally {
            // TODO: 로딩 완료
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <TodoHeader />

                <TodoList todos={todos} setTodos={setTodos} />

                <TodoInput setTodos={setTodos} />
            </div>
        </div>
    );
}
