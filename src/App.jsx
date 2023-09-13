import { Header, Footer } from "features/ui/index";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
    const [overlay, setOverlay] = useState(false);

    function handleOverlay() {
        setOverlay(true);
    }

    function handleContainer() {
        setOverlay(false);
    }
    return (
        <div className={overlay ? "container-overlay" : "container"} id="main">
            <Header overlay={handleOverlay} coatainer={handleContainer} />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
