import { useContext, useState } from 'react';
import { BsEmojiSunglasses, BsEmojiSunglassesFill } from 'react-icons/bs';
import styles from '../../Todo.module.css';
import { FilterContext } from '../../context/FitlerProvider';
import { DarkModeContext } from '../../context/DarkModeProvider';

const TABS = ['All', 'Active', 'Completed'];

export default function TodoHeader() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const { filter, setFilter } = useContext(FilterContext);

    const clickTab = (tab) => {
        setFilter(tab);
    };

    return (
        <div className={`${styles.header} ${darkMode && styles.dark_mode}`}>
            <div className={`${darkMode && styles.dark_mode}`} onClick={toggleDarkMode}>
                {darkMode ? <BsEmojiSunglassesFill /> : <BsEmojiSunglasses />}
            </div>

            <div className={`${styles.primary} ${styles.tabs}`}>
                {TABS.map((tab) => (
                    <div
                        onClick={clickTab.bind(this, tab)}
                        className={`${styles.tab} ${filter === tab ? styles.border_bottom : ''}`}
                        key={tab}
                    >
                        {tab}
                    </div>
                ))}
            </div>
        </div>
    );
}
