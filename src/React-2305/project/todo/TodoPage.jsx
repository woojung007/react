import { useState } from 'react';
import styles from './TodoPage.module.css';
import TodoHeader from './components/header/TodoHeader';
import TodoList from './components/list/TodoList';
import { FilterProvider } from './context/FilterProvider';
import { ThemeProvider } from './context/ThemeProvider';

export const filters = ['All', 'Active', 'Completed'];

export default function TodoPage() {
    const [filter, setFilter] = useState(filters[0]);

    return (
        <FilterProvider>
            <ThemeProvider>
                <div className={styles.background}>
                    <div className={styles.container}>
                        <TodoHeader filter={filter} onFilterChange={setFilter} />
                        <TodoList filter={filter} />
                    </div>
                </div>
            </ThemeProvider>
        </FilterProvider>
    );
}
