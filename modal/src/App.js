import Modal from "./modal/Modal"
import { useModalContext } from "./modal/ModalProvider";


function App() {
  const {isOpen, setIsOpen, isConfirmed, setIsConfirmed} = useModalContext()
  return (
    <>    
      {/* If modal is Open */}
     {isOpen ? 
      <Modal><p>You have open the modal</p></Modal> : ""}
      
      <p>You have selected: {isConfirmed ? "Confirm button" : "Cancel button"}</p>
      <button onClick={()=> {setIsOpen(true)
                            setIsConfirmed(false)}}>Click Me</button>
     

    </>
  );
}

export default App;
