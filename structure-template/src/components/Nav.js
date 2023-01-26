import NavMenuProvider from "../contexts/NavMenuProvider";
import NavMenu from "./NavMenu";
import NavItems from "./NavItems";

function Nav()
{
    return(
        <>
        <NavMenuProvider>
            <NavMenu>
                <NavItems/>
            </NavMenu>
        </NavMenuProvider>
        </>
    )
}

export default Nav;