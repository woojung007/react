import { BsFillTrashFill } from 'react-icons/bs';
import styles from '../../Todo.module.css';

export default function TodoList({ todos, setTodos }) {
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <div className={styles.content}>
            {todos?.map(({ id, value, chekced }) => (
                <div key={id} className={styles.todo_item}>
                    <input type='checkbox' defaultChecked={chekced} />
                    <div className={styles.todo}>{value}</div>
                    <div onClick={deleteTodo.bind(this, id)} className={styles.del_icon}>
                        <BsFillTrashFill />
                    </div>
                </div>
            ))}
        </div>
    );
}
