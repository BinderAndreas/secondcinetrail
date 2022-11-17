import React,{useState,createContext,useEffect} from 'react'
export const ThemeContext = createContext()




export default function ThemeContextProvider(props) {
        const [darkMode,setDarkMode]=useState(false)
    useEffect(() => {
       const theme = localStorage.getItem('darkMode')
       setDarkMode(JSON.parse(theme));
    }, [])


        return (
            <ThemeContext.Provider value={{darkMode, setDarkMode}}>
                {props.children}
            </ThemeContext.Provider>
        )
}