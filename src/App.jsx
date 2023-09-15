import { Header, Footer } from "features/ui/index";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
    const [overlay, setOverlay] = useState(false);

    function handleOverlay(check) {
        setOverlay(check);
    }

    return (
        <div className={overlay ? "container-overlay" : "container"} id="main">
            <div className="demo">
                "Please note that all products, prices, and information
                displayed on this website are for demonstration and portfolio
                purposes only. They do not represent actual products or services
                offered from this domain."
            </div>
            <Header overlay={handleOverlay} />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
