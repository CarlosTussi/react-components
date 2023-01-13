import HamburgerMenu from "./hamburger/HamburgerMenu";
import HamburgerMenuProvider from "./hamburger/HamburgerMenuProvider";

function App() {
  return (
    <>
    <HamburgerMenuProvider>
    <HamburgerMenu>
        <ul style={{paddingRight:"1em", fontSize: "2rem"}}>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Item 6</li>
          <li>Item 7</li>
        </ul>
      </HamburgerMenu>
    </HamburgerMenuProvider>
    </>
  );
}

export default App;
