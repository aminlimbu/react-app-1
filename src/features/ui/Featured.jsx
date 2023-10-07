import Card from "features/ui/Cards";
import candles from "resources/candles";
import { getCandleImage } from "features/utils/images";

export const Featured = () => {
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
