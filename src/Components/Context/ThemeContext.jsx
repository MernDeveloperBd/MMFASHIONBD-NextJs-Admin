"use client"

import Cookies from "js-cookie";
import { useEffect, useState } from "react"

const { MyContext } = require("./ThemeProvider")

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        const storedTheme = Cookies.get('theme')
        if (storedTheme) {
            setTheme(storedTheme)
            document.documentElement.classList.toggle('dark', storedTheme === 'dark')
        }
    }, []);

    const values = {
        theme, setTheme
    };

    return (
        <MyContext.Provider value={values}>
            {children}
        </MyContext.Provider>
    )
}

export default ThemeProvider;