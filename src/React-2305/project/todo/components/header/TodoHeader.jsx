import { useContext } from 'react';
import { BsEmojiSunglasses, BsEmojiSunglassesFill } from 'react-icons/bs';
import { ThemeContext } from '../../context/ThemeProvider';
import { filters } from '../../TodoPage';
import styles from './TodoHeader.module.css';

export default function TodoHeader({ filter, onFilterChange }) {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    const clickTab = (activeFilter) => {
        onFilterChange(activeFilter);
    };

    return (
        <header className={`${styles.header}`}>
            <div className={`${styles.dark_mode_icon}`} onClick={toggleTheme}>
                {darkMode ? <BsEmojiSunglassesFill /> : <BsEmojiSunglasses />}
            </div>

            <ul className={`${styles.filters}`}>
                {filters.map((item, idx) => (
                    <li onClick={clickTab.bind(this, item)} key={idx}>
                        <button className={`${styles.filter} ${filter === item && styles.selected}`}>{item}</button>
                    </li>
                ))}
            </ul>
        </header>
    );
}
