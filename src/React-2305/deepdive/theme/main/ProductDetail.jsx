import { DarkModeContext } from 'React-2305/deepdive/context/DarkModeContext';
import React, { useContext } from 'react';

export default function ProductDetail() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <div>
            Product Detail
            <p>
                DarkMode:
                {darkMode ? (
                    <span style={{ backgroundColor: 'black', color: 'white' }}>Dark Mode</span>
                ) : (
                    <span>Light Mode</span>
                )}
            </p>
            <button onClick={() => toggleDarkMode()}>Toggle</button>
        </div>
    );
}
