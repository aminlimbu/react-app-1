import { Header, Footer } from "features/ui/index";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="container">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
