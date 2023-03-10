import { useEffect, useRef, } from 'react';
import {useHamburgerMenuContext} from './HamburgerMenuProvider'

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

const openedHamburgerMenu = {
    position:"fixed",
    top:"0",    
    zIndex:"2",
    color:"white",
    backgroundColor:"black",    
    borderRadius:"1em 0 0 1em",
    transitionDuration: "0.5s",
    transitionTimingFunction:"ease-in-out",
    height: "100%",
    width: "80%",
}

const hamburgerContainer = {
   display: "grid",
   gridTemplateColums: "1fr",
   justifyContent: "end",

}



function HamburgerMenu(props)
{
    const {isOpen, setIsOpen} = useHamburgerMenuContext();
    const sideMenuRef = useRef();

    useEffect(()=>{
        if(sideMenuRef.current) //Avoid first render
            if(isOpen)
            {                
                sideMenuRef.current.style.transform = "translateX(0em)";  
            }
            else{                
                sideMenuRef.current.style.transform = "translateX(200vw)";
            }
    },[isOpen])

    return(
        <nav style={hamburgerContainer}>            

            {isOpen? <div style={transparentBackground} onClick={()=> setIsOpen(false)} aria-hidden="true"/>: ""}
            <div
                 ref={sideMenuRef}
                style={
                    isOpen ? {right: "0", ...openedHamburgerMenu} : {right: "100vw", ...openedHamburgerMenu}                    
                }
                 >
                <button onClick={() => setIsOpen(false)}>Close</button>

                {props.children}       

            </div>                            
                                     

        <button 
             style={{display: "block", maxWidth: "4em"}}
             role="menu button" 
             onClick={() => setIsOpen(true)}>Open</button>
    
</nav>
    );
}

export default HamburgerMenu;