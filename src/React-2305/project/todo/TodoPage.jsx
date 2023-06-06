import React, { useState } from 'react';
import styles from './Todo.module.css';
import { BsEmojiSunglasses, BsEmojiSunglassesFill, BsFillTrashFill } from 'react-icons/bs';

const TABS = ['All', 'Active', 'Completed'];

export default function TodoPage() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <BsEmojiSunglassesFill /> : <BsEmojiSunglasses />}
                    </div>

                    <div className={`${styles.primary} ${styles.tabs}`}>
                        {TABS.map((tab) => (
                            <div className={styles.border_bottom} key={tab}>
                                {tab}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.todo_item}>
                        <input type='checkbox' />
                        <div className={styles.todo}>강의보기</div>
                        <div>
                            <BsFillTrashFill />
                        </div>
                    </div>

                    <div className={styles.todo_item}>
                        <input type='checkbox' />
                        <div className={styles.todo}>강의보기</div>
                        <div>
                            <BsFillTrashFill />
                        </div>
                    </div>
                </div>

                <div className={styles.input_wrapper}>
                    <input type='text' className={styles.todo_input} placeholder='Add Todo' />
                    <button className={styles.add_btn}>Add</button>
                </div>
            </div>
        </div>
    );
}
