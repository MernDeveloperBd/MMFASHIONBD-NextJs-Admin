"use client"

import Cookies from "js-cookie";
import { useEffect, useState } from "react"
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const { MyContext } = require("./ThemeProvider")

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(null);
    const[isToggleSidebar, setIsToggleSidebar] = useState(true)

    useEffect(() => {
        const storedTheme = Cookies.get('theme')
        if (storedTheme) {
            setTheme(storedTheme)
            document.documentElement.classList.toggle('dark', storedTheme === 'dark')
        }
    }, []);

    const values = {
        theme, setTheme,isToggleSidebar, setIsToggleSidebar
    };

    return (
        <MyContext.Provider value={values}>
            <div className="main flex">
            <div className={`sidebarWrapper ${isToggleSidebar === false ? 'w-[0%]':'w-[18%]'} h-screen `}>
              <Sidebar />
            </div>
            <div className={`rightContent ${isToggleSidebar === false ? 'w-[100%]':'w-[82%]'}`}>
              <Header />
              <div className="p-3 pt-16">
                {children}
              </div>
            </div>
          </div>
        </MyContext.Provider>
    )
}

export default ThemeProvider;