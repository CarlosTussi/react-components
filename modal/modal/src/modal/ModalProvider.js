import React, {useContext, useState} from 'react';

const ModalContext = React.createContext();

function ModalProvider({children}){

    const [isOpen, setIsOpen] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    return(
        <ModalContext.Provider value={{
            isOpen,
            setIsOpen,
            isConfirmed,
            setIsConfirmed
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;
export const useModalContext = () => useContext(ModalContext);