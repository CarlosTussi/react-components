import {Routes, Route, } from 'react-router-dom'
import Homepage from '../pages/Homepage';
import About from '../pages/About';
import Comingsoon from '../pages/Comingsoon';

function Main()
{
    return(
        <main>
            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/comingsoon" element={<Comingsoon />}/>
            </Routes>
        </main>
    )
}

export default Main;