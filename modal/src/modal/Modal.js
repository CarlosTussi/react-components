import { useModalContext } from "./ModalProvider";

const transparentBackground = {
    backgroundColor: "#333333",
    opacity: "0.7",
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: "0",
    right: "0",
    zIndex: "1",
}

const confirmationBox = {
    position: "fixed",
    zIndex: "4",
    top: "45%",    
    left: "45%",
    border: "2px dotted black",
    color: "bisque",
    backgroundColor: "black",
}


function Modal(props){
    const {isOpen, setIsOpen, isConfirmed, setIsConfirmed} = useModalContext();
    return(
        <>
        <div style={transparentBackground} />
        <div style={confirmationBox}>
            {props.children}            
            <button onClick={() => setIsOpen(false)}>Cancel</button>
            <button onClick={() => { setIsOpen(false);
                                     setIsConfirmed(true);}}>Confirm</button>
        </div>
        </>
    )
}

export default Modal;