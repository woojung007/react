import styles from './Todo.module.css';
import TodoHeader from './components/header/TodoHeader';
import TodoList from './components/list/TodoList';
import { FilterProvider } from './context/FilterProvider';
import { ThemeProvider } from './context/ThemeProvider';

export default function TodoPage() {
    return (
        <FilterProvider>
            <ThemeProvider>
                <div className={styles.background}>
                    <div className={styles.container}>
                        <TodoHeader />
                        <TodoList />
                    </div>
                </div>
            </ThemeProvider>
        </FilterProvider>
    );
}
