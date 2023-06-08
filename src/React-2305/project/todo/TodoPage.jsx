import styles from './Todo.module.css';
import TodoHeader from './components/header/TodoHeader';
import TodoInput from './components/input/TodoInput';
import TodoList from './components/list/TodoList';
import { FilterProvider } from './context/FitlerProvider';

export default function TodoPage() {
    return (
        <FilterProvider>
            <div className={styles.background}>
                <div className={styles.container}>
                    <TodoHeader />
                    <TodoList />
                    <TodoInput />
                </div>
            </div>
        </FilterProvider>
    );
}
