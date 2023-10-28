import { Cards } from "features/ui";
import { getCandleImage } from "features/utils/images";

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

const ProductList = ({ filters, candles }) => {
    return (
        <div className="catalogue grid">
            {filters.length > 0
                ? createCandles(filters)
                : createCandles(candles)}
        </div>
    );
};
export default ProductList;
