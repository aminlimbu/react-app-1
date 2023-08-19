import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Featured from "./Featured";
import DeliveryInfo from "./DeliveryInfo";
import Story from "./Story";

function App() {
    return (
        <div className="container">
            <Header />
            <Hero />
            <DeliveryInfo />
            <Featured />
            <Story />
            <Footer />
        </div>
    );
}

export default App;
