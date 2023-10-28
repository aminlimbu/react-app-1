import { useState } from "react";
import Pagination from "../features/ui/Pagination";
import ProductList from "features/ui/ProductList";
import CategoryList from "features/ui/CategoryList";
import candles from "resources/candles";

const Products = () => {
    const [filters, setFilters] = useState(candles);

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);

    // filter handles using object property; collection
    const handleCategory = (collectionName) => {
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
    // const filteredCandles = filters;

    // Pagination calculation
    const indexOfLastItem = currentPage * productsPerPage;
    const indexOfFirstItem = indexOfLastItem - productsPerPage;
    const currentItems = filters.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="product-container">
            <div className="product-banner"></div>
            <CategoryList handleCategory={handleCategory} />
            <div className="catalogue-container">
                <ProductList filters={currentItems} candles={candles} />
                <Pagination
                    filters={filters}
                    currentPage={currentPage}
                    productsPerPage={productsPerPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
};
export default Products;
