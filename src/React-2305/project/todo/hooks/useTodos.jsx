import { useContext, useEffect, useState } from 'react';
import { FilterContext } from '../context/FilterProvider';

export default function useTodos() {
    const { filter } = useContext(FilterContext);
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            // TODO: 로딩 시작

            const todosInLocalStorage =
                JSON.parse(localStorage.getItem('todos')).sort((a, b) => a.value - b.value) || [];

            if (filter === 'Active')
                return setTodos(todosInLocalStorage.filter((todo) => !todo.checked).sort((a, b) => a.value - b.value));
            if (filter === 'Completed')
                return setTodos(todosInLocalStorage.filter((todo) => todo.checked).sort((a, b) => a.value - b.value));

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
