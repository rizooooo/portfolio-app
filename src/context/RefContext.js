import React, { createContext, useState } from 'react'

export const RefContext = createContext();

const RefContextProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        isLightTheme: false,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    });

    const [projectRef, setProjectRef] = useState(null);
    const [skillsRef, setSkillsRef] = useState(null);
    const [experienceRef, setExperienceRef] = useState(null);
    const [homeRef, setHomeRef] = useState(null);


    return (
     <RefContext.Provider value={{ projectRef, setProjectRef, skillsRef, setSkillsRef, experienceRef, setExperienceRef, homeRef, setHomeRef }}>
         {children}
     </RefContext.Provider>
    )
}

export default RefContextProvider;
