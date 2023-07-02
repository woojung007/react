import { useState } from 'react';
import TodoHeader from './components/header/TodoHeader';
import TodoList from './components/list/TodoList';
import { TodoThemeProvider } from './context/TodoThemeProvider';
import styles from './TodoPage.module.css';

export const filters = ['All', 'Active', 'Completed'];

export default function TodoPage() {
    const [filter, setFilter] = useState(filters[0]);

    return (
        <TodoThemeProvider>
            <div id={styles.todo_root}>
                <div className={styles.todo_container}>
                    <TodoHeader filter={filter} onFilterChange={setFilter} />
                    <TodoList filter={filter} />
                </div>
            </div>
        </TodoThemeProvider>
    );
}
