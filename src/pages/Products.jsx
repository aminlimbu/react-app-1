import candles from "../resources/candles";
import { Cards } from "features/ui";
import { getCandleImage } from "features/utils/images";
import { useState } from "react";

// created candle cards
const createCandles = (candles) => {
    return candles.map((candle) => (
        <Cards
            key={candle.name}
            imagelink={getCandleImage(candle.colour)}
            name={candle.name}
            fragrance={candle.fragrance}
            description={candle.description}
            className="flex"
        />
    ));
};

const Products = () => {
    const [filters, setFilters] = useState([]);

    // filter handles using object property; collection
    const handleClick = (collectionName) => {
        switch (collectionName) {
            case "fav-collection":
                setFilters(
                    candles.filter((candle) => {
                        return candle.collection.includes("romance");
                    })
                );
                break;
            case "zodiac-collection":
                setFilters(
                    candles.filter((candle) => {
                        return candle.collection.includes("zodiac");
                    })
                );
                break;
            case "sig-collection":
                setFilters(
                    candles.filter((candle) => {
                        return candle.collection.includes("signature");
                    })
                );
                break;
            default:
                setFilters(candles);
                break;
        }
    };

    // initialise filteredCandles to filters state
    const filteredCandles = filters;

    return (
        <div className="product-container">
            <div className="product-banner"></div>
            <div className="catalogue-categories">
                <div className="container collections grid">
                    <div
                        className="all-collection flex"
                        onClick={() => handleClick("all-collection")}
                    >
                        <div className="collection-icons">
                            <span className="material-symbols-outlined">
                                candle
                            </span>
                        </div>
                        <div className="collection-text">All Candles</div>
                    </div>
                    <div
                        className="fav-collection flex"
                        onClick={() => handleClick("fav-collection")}
                    >
                        <div className="collection-icons">
                            <span className="material-symbols-outlined">
                                favorite
                            </span>
                        </div>
                        <div className="collection-text">Romance</div>
                    </div>
                    <div
                        className="zodiac-collection flex"
                        onClick={() => handleClick("zodiac-collection")}
                    >
                        <div className="collection-icons">
                            <span className="material-symbols-outlined">
                                stars
                            </span>
                        </div>
                        <div className="collection-text">Zodiac</div>
                    </div>
                    <div
                        className="sig-collection flex"
                        onClick={() => handleClick("sig-collection")}
                    >
                        <div className="collection-icons">
                            <span className="material-symbols-outlined">
                                signature
                            </span>
                        </div>
                        <div className="collection-text">Signature</div>
                    </div>
                </div>
            </div>
            <div className="catalogue-container">
                <div className="catalogue grid">
                    {filters.length > 0
                        ? createCandles(filteredCandles)
                        : createCandles(candles)}
                </div>
            </div>
        </div>
    );
};
export default Products;
