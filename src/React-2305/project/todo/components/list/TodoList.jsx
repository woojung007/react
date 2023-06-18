import { useEffect, useState } from 'react';
import styles from './TodoList.module.css';
import AddTodo from './add/AddTodo';
import Todo from './item/Todo';

export default function TodoList({ filter }) {
    const [todos, setTodos] = useState(() => readTodosFromLocalStorage()); // 컴포넌트 마운트 될 때 한번만 호출

    // 추가
    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    };

    // 삭제
    const handleDelete = (deleted) => {
        setTodos(todos.filter((todo) => todo.id !== deleted.id));
    };

    // 수정
    const handleUpdate = (updated) => {
        setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
    };

    useEffect(() => {
        // 어떤 일을? ==> 로컬스토리지에 투두를 저장한다.
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]); // 언제? ==> 투두가 변경될 때

    const filteredTodos = getFilteredItems(todos, filter);

    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {filteredTodos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onDelete={handleDelete} onUpdate={handleUpdate} />
                ))}
            </ul>

            {/* todo가 추가되면 나한테 알려줘~  */}
            <AddTodo onAdd={handleAdd} />
        </section>
    );
}

function readTodosFromLocalStorage() {
    console.log('😇');
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
    if (filter === 'All') {
        return todos;
    }

    return todos.filter((todo) => todo.status === filter);
}
