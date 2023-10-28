const CategoryList = ({ handleCategory }) => {
    return (
        <div className="catalogue-categories">
            <div className="container collections grid">
                <div
                    className="all-collection flex"
                    onClick={() => handleCategory("all-collection")}
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
                    onClick={() => handleCategory("fav-collection")}
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
                    onClick={() => handleCategory("zodiac-collection")}
                >
                    <div className="collection-icons">
                        <span className="material-symbols-outlined">stars</span>
                    </div>
                    <div className="collection-text">Zodiac</div>
                </div>
                <div
                    className="sig-collection flex"
                    onClick={() => handleCategory("sig-collection")}
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
    );
};
export default CategoryList;
