
import {useState, useEffect, useRef} from 'react';


const menuStyle= {
    width:"100vw",
    height:"6vh",
    background: "black",
    color: "white",
    position: "fixed",
    zIndex: "2",

    transitionDuration: "0.3s",
    transitionTimingFunction: "ease-in-out",
}

function Menu()
{
    const menuRef = useRef();
    const [previousPosn, setPreviousPosn] = useState(0);

    useEffect( ()=>{
        const currentPosn = window.scrollY;

        const handleScroll = () =>{
            currentPosn > previousPosn ? menuRef.current.style.transform = "translateY(-40vh)" : menuRef.current.style.transform = "translateY(0)" 

            setPreviousPosn(currentPosn);                      
        }        
        window.addEventListener('scroll', handleScroll);

        return ()=> {
            window.removeEventListener('scroll', handleScroll);
        }
    }) //No dependency array here

    return(
        <nav ref={menuRef}
             style={menuStyle}>
        </nav>
    );
}

export default Menu;