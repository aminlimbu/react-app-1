const Pagination = ({
    filters,
    currentPage,
    productsPerPage,
    setCurrentPage,
}) => {
    // Get total number of pages
    const totalPages = Math.ceil(filters.length / productsPerPage);
    const pageNumbers = [];
    for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i);
    }
    const hasNext =
        productsPerPage * (currentPage - 1) + productsPerPage > filters.length;
    const hasPrev = productsPerPage * (currentPage - 1) > 0;
    return (
        <div className="pagination-container">
            <button
                className="button"
                onClick={() =>
                    currentPage > 0
                        ? setCurrentPage(currentPage - 1)
                        : setCurrentPage(1)
                }
                disabled={!hasPrev}
            >
                Previous
            </button>
            <div className="paginatino-indexes">
                <div className="indexes">
                    <ul className="indexes-list">
                        {pageNumbers.map((item) => (
                            <li
                                className="indexes-list-items"
                                onClick={() => setCurrentPage(item + 1)}
                            >
                                {item + 1}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <button
                className="button"
                onClick={() =>
                    currentPage > 0
                        ? setCurrentPage(currentPage + 1)
                        : setCurrentPage(1)
                }
                disabled={hasNext}
            >
                Next
            </button>
        </div>
    );
};
export default Pagination;
