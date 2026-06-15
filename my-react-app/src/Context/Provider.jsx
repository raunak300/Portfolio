import { useState } from "react";
import StateContext from "./StateMgmt";

const StateProvider=({children})=>{
    const [darkMode,setDarkMode]= useState(true);

    return (
        <StateContext.Provider value={{darkMode,setDarkMode}}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider;