import candles from "../resources/candles";
import { Cards } from "features/ui";
import { getCandleImage } from "features/utils/images";

const createCandles = (candles) => {
    const cards = candles.map((candle) => {
        return (
            <Cards
                key={candle.name}
                imagelink={getCandleImage(candle.colour)}
                name={candle.name}
                fragrance={candle.fragrance}
                description={candle.description}
            />
        );
    });
    return cards;
};

const Products = () => {
    return (
        <div className="product-container">
            <div className="product-banner"></div>
            <div className="catalogue-container">
                <div className="catalogue">{createCandles(candles)}</div>
            </div>
        </div>
    );
};
export default Products;
