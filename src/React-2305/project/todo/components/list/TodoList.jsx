import { BsFillTrashFill } from 'react-icons/bs';
import styles from '../../Todo.module.css';

export default function TodoList({ todos }) {
    return (
        <div className={styles.content}>
            {todos?.map(({ id, value, chekced }) => (
                <div key={id} className={styles.todo_item}>
                    <input type='checkbox' defaultChecked={chekced} />
                    <div className={styles.todo}>{value}</div>
                    <div>
                        <BsFillTrashFill />
                    </div>
                </div>
            ))}
        </div>
    );
}
