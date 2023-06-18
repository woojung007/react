import { useState } from 'react';
import TodoHeader from './components/header/TodoHeader';
import TodoList from './components/list/TodoList';
import { ThemeProvider } from './context/ThemeProvider';

export const filters = ['All', 'Active', 'Completed'];

export default function TodoPage() {
    const [filter, setFilter] = useState(filters[0]);

    return (
        <ThemeProvider>
            <TodoHeader filter={filter} onFilterChange={setFilter} />
            <TodoList filter={filter} />
        </ThemeProvider>
    );
}
