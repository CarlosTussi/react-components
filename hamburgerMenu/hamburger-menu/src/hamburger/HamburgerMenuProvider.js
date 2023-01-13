import React, { useState } from "react";


const HamburgerMenuContext = React.createContext();

function HamburgerMenuProvider({children})
{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <HamburgerMenuContext.Provider value={{
            isOpen,
            setIsOpen,
        }}>
            {children}
        </HamburgerMenuContext.Provider>
    )
}

export default HamburgerMenuProvider;
export const useHamburgerMenuContext = () => React.useContext(HamburgerMenuContext);