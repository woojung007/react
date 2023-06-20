import { useState } from 'react';
import TodoHeader from './components/header/TodoHeader';
import TodoList from './components/list/TodoList';
import { TodoThemeProvider } from './context/TodoThemeProvider';

export const filters = ['All', 'Active', 'Completed'];

export default function TodoPage() {
    const [filter, setFilter] = useState(filters[0]);

    return (
        <TodoThemeProvider>
            <TodoHeader filter={filter} onFilterChange={setFilter} />
            <TodoList filter={filter} />
        </TodoThemeProvider>
    );
}
