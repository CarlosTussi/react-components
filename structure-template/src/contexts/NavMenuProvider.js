import React, { useState } from "react";


const NavMenuContext = React.createContext();

function NavMenuProvider({children})
{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <NavMenuContext.Provider value={{
            isOpen,
            setIsOpen,
        }}>
            {children}
        </NavMenuContext.Provider>
    )
}

export default NavMenuProvider;
export const useNavMenuContext = () => React.useContext(NavMenuContext);