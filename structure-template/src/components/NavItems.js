import { useNavMenuContext } from "../contexts/NavMenuProvider";
import { Link, } from "react-router-dom";

function NavItems()
{
    const {setIsOpen} = useNavMenuContext();
    return(
        <>
             <ul>
                <li><Link to="/" className='navLink' onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link to="/about" className='navLink' onClick={() => setIsOpen(false)}>About</Link></li>
                <li><Link to="/comingsoon" className='navLink' onClick={() => setIsOpen(false)}>Menu</Link></li>
                <li><Link to="/comingsoon" className='navLink' onClick={() => setIsOpen(false)}>Reservations</Link></li>
                <li><Link to="/comingsoon" className='navLink' onClick={() => setIsOpen(false)}>Order</Link></li>
                <li><Link to="/comingsoon" className='navLink' onClick={() => setIsOpen(false)}>Login</Link></li>                    
            </ul>
        </>
    )
}

export default NavItems;