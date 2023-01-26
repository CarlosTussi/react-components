import { useEffect, useRef, } from 'react';
import { useNavMenuContext } from '../contexts/NavMenuProvider';

function NavMenu(props)
{
    const {isOpen, setIsOpen} = useNavMenuContext();
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
        <nav>            
            {isOpen? <div className="transparentBackground" onClick={()=> setIsOpen(false)} aria-hidden="true"/>: ""}

                <div ref={sideMenuRef} className={ isOpen ? "navMenuOpened" : "navMenuClosed"}>
                    <button onClick={() => setIsOpen(false)}>Close</button>
                    {props.children}       
                </div>                                                                     
                <div className='desktopNav'>
                    {props.children}  
                </div>
        <button className="mobileNavMenuButton"             
             role="menu button" 
             onClick={() => setIsOpen(true)}>Open</button>
    
        </nav>
    );
}

export default NavMenu;