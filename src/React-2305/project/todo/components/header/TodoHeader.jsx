import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
import { filters } from '../../TodoPage';
import styles from './TodoHeader.module.css';
import { useTodoDarkMode } from '../../context/TodoThemeProvider';

export default function TodoHeader({ filter, onFilterChange }) {
    const { darkMode, toggleTheme } = useTodoDarkMode();

    const clickTab = (activeFilter) => {
        onFilterChange(activeFilter);
    };

    return (
        <header className={styles.header}>
            <div className={styles.theme_icon} onClick={toggleTheme}>
                {darkMode ? <BsSunFill /> : <BsFillMoonFill />}
            </div>

            <ul className={styles.filters}>
                {filters.map((item, idx) => (
                    <li onClick={clickTab.bind(this, item)} key={idx}>
                        <button className={`${styles.filter} ${filter === item && styles.selected}`}>{item}</button>
                    </li>
                ))}
            </ul>
        </header>
    );
}
