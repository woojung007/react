import { createContext, useContext, useEffect, useState } from 'react';

const TodoThemeContext = createContext();

export function TodoThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        updateDarkMode(!darkMode);
    };

    useEffect(() => {
        const isDark =
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches); // boolean 값

        setDarkMode(isDark); // 리액트 내부 state에 업데이트
        updateDarkMode(isDark); // 웹페이지 html에 dark 클래스 추가/제거
    }, []);

    return (
        <TodoThemeContext.Provider
            value={{
                darkMode,
                toggleTheme,
            }}
        >
            {children}
        </TodoThemeContext.Provider>
    );
}

function updateDarkMode(darkMode) {
    if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    }
}

export const useTodoDarkMode = () => useContext(TodoThemeContext);
