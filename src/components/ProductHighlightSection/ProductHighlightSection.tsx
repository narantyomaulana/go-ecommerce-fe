import { Link } from 'react-router-dom';

interface ProductHighlightSectionProps {
    beforeFooter?: boolean;
}

function ProductHighlightSection(props: ProductHighlightSectionProps) {
    return (
        <div className={`product-section ${props.beforeFooter ? 'before-footer-section' : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                        <h2 className="mb-4 section-title">Dibuat dengan material terbaik.</h2>
                        <p className="mb-4">Rasakan perpaduan sempurna antara keahlian dan daya tahan. Furnitur kami dibuat dengan material premium untuk meningkatkan estetika dan kenyamanan ruang Anda.</p>
                        <p><Link to="/shop" className="btn">Jelajahi</Link></p>
                    </div>

                    {/* Product Items */}
                    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <Link className="product-item" to="/cart">
                            <img src="/images/product-1.png" className="img-fluid product-thumbnail" alt="Nordic Chair" />
                            <h3 className="product-title">Nordic Chair</h3>
                            <strong className="product-price">Rp750.000</strong>
                            <span className="icon-cross">
                                <img src="/images/cross.svg" className="img-fluid" alt="Cross" />
                            </span>
                        </Link>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <Link className="product-item" to="cart.html">
                            <img src="images/product-2.png" className="img-fluid product-thumbnail" />
                            <h3 className="product-title">Kruzo Aero Chair</h3>
                            <strong className="product-price">Rp1.170.000</strong>

                            <span className="icon-cross">
                                <img src="images/cross.svg" className="img-fluid" />
                            </span>
                        </Link>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <Link className="product-item" to="cart.html">
                            <img src="images/product-3.png" className="img-fluid product-thumbnail" />
                            <h3 className="product-title">Ergonomic Chair</h3>
                            <strong className="product-price">Rp645.000</strong>

                            <span className="icon-cross">
                                <img src="images/cross.svg" className="img-fluid" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductHighlightSection;
