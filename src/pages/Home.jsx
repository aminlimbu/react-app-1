import { Featured } from "features/ui/Featured";
import OurStory from "features/ui/OurStory";

const Hero = () => {
    return (
        <div className="hero">
            <h1 className="hero-heading">Lorem Heading One</h1>
            <p className="hero-body">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <br />
                exercitationem tenetur, itaque dolorem!
            </p>
        </div>
    );
};

const DeliveryInfo = () => {
    return (
        <div className="delivery-info">
            <img src="/images/delivery.png" alt="" />
            <div className="delivery-text">
                Free Delivery<sup>*</sup>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <>
            <Hero />
            <DeliveryInfo />
            <Featured />
            <OurStory />
        </>
    );
};
export default Home;
