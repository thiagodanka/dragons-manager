import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    };

    // ⚙️ Valor inicial do tema já vindo do cookie, senão 'light'
    const [theme, setTheme] = useState(() => getCookie('theme') || 'light');

    useEffect(() => {
        document.body.className = `theme-${theme}`;
        document.cookie = `theme=${theme}; path=/; max-age=31536000`;
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
