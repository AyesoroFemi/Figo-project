// import { useState } from 'react'
// import { createContext } from 'react'

export const NavContext = createContext()

export const NavProvider = ({ children }) => {

     const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    return (
        <NavContext.Provider value={{toggleState, toggleTab}}>
            {children}
        </NavContext.Provider>
    )
}