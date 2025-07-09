function Pagination({
    currentPage,
    totalPages,
    onPageChange
}: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}) {
    const getPageNumbers = () => {
        if (totalPages <= 3) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        if (currentPage <= 2) return [1, 2, 3];
        if (currentPage >= totalPages - 1) return [totalPages - 2, totalPages - 1, totalPages];

        return [currentPage - 1, currentPage, currentPage + 1];
    };

    const pageChangeHandler = (newPage: number) => {
        if (newPage === 0 || newPage === totalPages + 1) return

        onPageChange(newPage)
    }

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <button
                        className="page-link"
                        aria-label="Previous"
                        onClick={() => pageChangeHandler(currentPage - 1)}
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>

                {getPageNumbers().map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => pageChangeHandler(number)}
                        >
                            {number}
                        </button>
                    </li>
                ))}

                <li className="page-item">
                    <button
                        className="page-link"
                        aria-label="Next"
                        onClick={() => pageChangeHandler(currentPage + 1)}
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
