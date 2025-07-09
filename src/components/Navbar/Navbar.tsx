import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const { pathname } = useLocation();

    return (
        <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Furni<span>.</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarsFurni"
                    aria-controls="navbarsFurni"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsFurni">
                    <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                        <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className={`nav-item ${pathname === '/shop' ? 'active' : ''}`}>
                            <Link className="nav-link" to="/shop">Belanja</Link>
                        </li>
                        <li className={`nav-item ${pathname === '/services' ? 'active' : ''}`}>
                            <Link className="nav-link" to="/services">Layanan</Link>
                        </li>
                    </ul>

                    <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                        <li className="margin-right"><Link className="nav-link" to="/cart"><img src="/images/cart.svg" alt="Cart" /></Link></li>
                        <li className="margin-right"><Link className="nav-link" to="/login"><img src="/images/user.svg" alt="User" /></Link></li>
                        <li><Link className="nav-link" to="#"><img src="/images/sign-out.svg" alt="User" /></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar