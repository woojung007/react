import { useContext, useEffect, useState } from 'react';
import { FilterContext } from '../context/FilterProvider';
import { TodosContext } from '../context/TodosProvider';

export default function useTodos() {
    const { filter } = useContext(FilterContext);
    // const { todos, setTodos } = useContext(TodosContext);
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            // TODO: 로딩 시작
            // const response = await fetch('data/todos.json');
            // const json = await response.json();

            const todosInLocalStorage = JSON.parse(localStorage.getItem('todos') || []);

            // if (filter === 'Active') return setTodos(json.todos.filter((todo) => !todo.checked));
            // if (filter === 'Completed') return setTodos(json.todos.filter((todo) => todo.checked));

            // return setTodos(json.todos);

            if (filter === 'Active') return setTodos(todosInLocalStorage.filter((todo) => !todo.checked));
            if (filter === 'Completed') return setTodos(todosInLocalStorage.filter((todo) => todo.checked));

            return setTodos(todosInLocalStorage);
        } catch (e) {
            // TODO: error시 보여줄 페이지
        } finally {
            // TODO: 로딩 완료
        }
    };

    useEffect(() => {
        fetchTodos();
    }, [filter]);

    return [todos, setTodos];
}
