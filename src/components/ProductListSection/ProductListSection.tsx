import { useState } from "react";
import Pagination from "../Pagination/Pagination"

function ProductListSection() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="untree_co-section product-section before-footer-section">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <a className="product-item" href="#">
                            <img src="images/product-3.png" className="img-fluid product-thumbnail" />
                            <h3 className="product-title">Kursi Nordic</h3>
                            <strong className="product-price">Rp775.000</strong>

                            <span className="icon-cross">
                                <img src="images/cross.svg" className="img-fluid" />
                            </span>
                        </a>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <a className="product-item" href="#">
                            <img src="images/product-1.png" className="img-fluid product-thumbnail" />
                            <h3 className="product-title">Kursi Nordic</h3>
                            <strong className="product-price">Rp775.000</strong>

                            <span className="icon-cross">
                                <img src="images/cross.svg" className="img-fluid" />
                            </span>
                        </a>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <a className="product-item" href="#">
                            <img src="images/product-2.png" className="img-fluid product-thumbnail" />
                            <h3 className="product-title">Kursi Kruzo Aero</h3>
                            <strong className="product-price">Rp1.209.000</strong>

                            <span className="icon-cross">
                                <img src="images/cross.svg" className="img-fluid" />
                            </span>
                        </a>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <a className="product-item" href="#">
                            <img src="images/product-3.png" className="img-fluid product-thumbnail" />
                            <h3 className="product-title">Kursi Ergonomis</h3>
                            <strong className="product-price">Rp666.500</strong>

                            <span className="icon-cross">
                                <img src="images/cross.svg" className="img-fluid" />
                            </span>
                        </a>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <a className="product-item" href="#">
                            <img src="images/product-3.png" className="img-fluid product-thumbnail" />
                            <h3 className="product-title">Kursi Nordic</h3>
                            <strong className="product-price">Rp775.000</strong>

                            <span className="icon-cross">
                                <img src="images/cross.svg" className="img-fluid" />
                            </span>
                        </a>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <a className="product-item" href="#">
                            <img src="images/product-1.png" className="img-fluid product-thumbnail" />
                            <h3 className="product-title">Kursi Nordic</h3>
                            <strong className="product-price">Rp775.000</strong>

                            <span className="icon-cross">
                                <img src="images/cross.svg" className="img-fluid" />
                            </span>
                        </a>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <a className="product-item" href="#">
                            <img src="images/product-2.png" className="img-fluid product-thumbnail" />
                            <h3 className="product-title">Kursi Kruzo Aero</h3>
                            <strong className="product-price">Rp1.209.000</strong>

                            <span className="icon-cross">
                                <img src="images/cross.svg" className="img-fluid" />
                            </span>
                        </a>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <a className="product-item" href="#">
                            <img src="images/product-3.png" className="img-fluid product-thumbnail" />
                            <h3 className="product-title">Kursi Ergonomis</h3>
                            <strong className="product-price">Rp666.500</strong>

                            <span className="icon-cross">
                                <img src="images/cross.svg" className="img-fluid" />
                            </span>
                        </a>
                    </div>

                </div>

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default ProductListSection