import React, { useState } from 'react';
import styles from '../../Todo.module.css';
import { BsEmojiSunglassesFill, BsEmojiSunglasses } from 'react-icons/bs';

const TABS = ['All', 'Active', 'Completed'];

export default function TodoHeader() {
    const [darkMode, setDarkMode] = useState(true);

    return (
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
    );
}
