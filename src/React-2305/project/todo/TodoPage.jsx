import styles from './Todo.module.css';
import TodoHeader from './components/header/TodoHeader';
import TodoInput from './components/input/TodoInput';
import TodoList from './components/list/TodoList';
import { FilterProvider } from './context/FilterProvider';
import { ThemeProvider } from './context/ThemeProvider';
import { TodosProvider } from './context/TodosProvider';

export default function TodoPage() {
    return (
        <FilterProvider>
            <ThemeProvider>
                <TodosProvider>
                    <div className={styles.background}>
                        <div className={styles.container}>
                            <TodoHeader />
                            <TodoList />
                            <TodoInput />
                        </div>
                    </div>
                </TodosProvider>
            </ThemeProvider>
        </FilterProvider>
    );
}
