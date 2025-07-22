import { createContext,useContext,useState } from "react";

const ThemeContext=createContext();


export const ThemeProvider=({children})=>{
// state define
    const[theme,setTheme]=useState("light");
//function define
    const toggleTheme=()=>{

        setTheme((prevTheme)=>prevTheme==="light"?"dark":"light")
    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
{children}

        </ThemeContext.Provider>

        
    )
}
export const useTheme=()=>{
    return useContext(ThemeContext)
}

export default ThemeContext