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
            <div className="demo">
                "Please note that all products, prices, and information
                displayed on this website are for demonstration and portfolio
                purposes only. They do not represent actual products or services
                available for purchase. If you have any questions or require
                further information, please feel free to contact me."
            </div>
            <Header overlay={handleOverlay} coatainer={handleContainer} />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
