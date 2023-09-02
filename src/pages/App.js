import Header from "features/ui/Header";
import Footer from "features/ui/Footer";
import Hero from "features/Hero";
import Featured from "features/Featured";
import DeliveryInfo from "features/DeliveryInfo";
import Story from "features/Story";

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
