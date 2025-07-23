import Header from "./components/Header";
import Home from "./components/Home";
import { useState } from "react";
function App() {
    let [isHome,setIsHome] = useState(true);
    function toggleHome() {
        setIsHome(prev=>!prev)
        
    }

    return (
        <>
            <Header toggle={toggleHome} isHome={isHome}/>
            <Home isHome={isHome}/>
        </>
    );
}

export default App;
