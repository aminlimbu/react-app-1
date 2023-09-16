import Card from "features/ui/Cards";
import candles from "resources/candles";
import { getCandleImage } from "features/utils/images";

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

const Featured = () => {
    const featuredItems = candles.filter((item) => item.featured === "Yes");
    function handleSlide(e) {
        const featureContainer = document.querySelector(".featured-container");
        if (e.target.name === "rightButton") {
            const width = featureContainer.clientWidth;
            featureContainer.scrollLeft += width;
        }
        if (e.target.name === "leftButton") {
            const width = featureContainer.clientWidth;
            featureContainer.scrollLeft -= width;
        }
    }
    const createFeaturedCards = (items) => {
        const cards = Object.keys(items).map((key) => {
            return (
                <div className="featured-cards">
                    <Card
                        name={items[key].name}
                        imagelink={getCandleImage(items[key].colour)}
                        description={items[key].description}
                    />
                </div>
            );
        });
        return cards;
    };
    return (
        <div className="featured-section">
            <h2>Featured Items</h2>
            <div className="featured">
                <button
                    key="buttonLeft"
                    className="featured-lbutton material-symbols-outlined"
                    onClick={handleSlide}
                    name="leftButton"
                >
                    arrow_circle_left
                </button>
                <div key="carousel" className="featured-container">
                    {createFeaturedCards(featuredItems)}
                </div>
                <button
                    key="buttonRight"
                    className="featured-rbutton material-symbols-outlined"
                    onClick={handleSlide}
                    name="rightButton"
                >
                    arrow_circle_right
                </button>
            </div>
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

const Story = () => {
    return (
        <div className="our-story">
            <h2>Our story</h2>
            <div className="story">
                <div className="story-image"></div>
                <article>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Et in distinctio totam corrupti nemo! Dignissimos
                        reprehenderit quis ab quisquam maxime porro eveniet?
                        Delectus, ab vel.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aliquam laboriosam iusto officiis ipsam quae vitae
                        enim quam neque fugit consequatur quas repudiandae rerum
                        excepturi earum et, debitis quos! Obcaecati, dolorum?
                    </p>
                </article>
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
            <Story />
        </>
    );
};
export default Home;
