import { useContext, useState } from 'react';
import { BsEmojiSunglasses, BsEmojiSunglassesFill } from 'react-icons/bs';
import styles from '../../Todo.module.css';
import { FilterContext } from '../../context/FilterProvider';
import { ThemeContext } from '../../context/ThemeProvider';
import { filters } from '../../TodoPage';

export default function TodoHeader({ filter, onFilterChange }) {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    const clickTab = (activeFilter) => {
        onFilterChange(activeFilter);
    };

    return (
        <header className={`${styles.header} ${darkMode && styles.dark_mode}`}>
            <div className={`${darkMode && styles.dark_mode}`} onClick={toggleTheme}>
                {darkMode ? <BsEmojiSunglassesFill /> : <BsEmojiSunglasses />}
            </div>

            <div className={`${styles.primary} ${styles.filters}`}>
                {filters.map((filter, idx) => (
                    <li
                        onClick={clickTab.bind(this, filter)}
                        className={`${styles.filter} ${filter === filter ? styles.active : ''}`}
                        key={idx}
                    >
                        <button>{filter}</button>
                    </li>
                ))}
            </div>
        </header>
    );
}
